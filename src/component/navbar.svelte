<script>
  import { auth, active_kriteria, active_lingkup } from "../store";
  import { link, navigate } from "svelte-routing";
  import Menu1 from "../datas/menu_1";
  import Menu2 from "../datas/menu_2";
  import Menu3 from "../datas/menu_3";

  let usermenu_active, kriteriamenu_active = false;

  let kriterias = [
    "1 » VISI, MISI, TUJUAN DAN STRATEGI",
    "2 » TATA PAMONG DAN TATA KELOLA",
    "3 » MAHASISWA",
    "4 » SUMBER DAYA",
    "5 » KEUANGAN, SARANA, DAN PRASARANA",
    "6 » KURIKULUM",
    "7 » PENELITIAN",
    "8 » PENGABDIAN KEPADA MASYARAKAT",
    "9 » LUARAN DAN CAPAIAN TRIDHARMA",
  ];

  let ondownload = false;

  let logout = () => {
    window.localStorage.removeItem("auth");
    auth.update(() => false);
    navigate("/login", { replace: true });
  };

  let change_criteria = (i) => {
    active_kriteria.update(() => i + 1);
    // active_lingkup.update(() => 1);
    setTimeout(() => {
      kriteriamenu_active = false;
    }, 1000);
  };

  let s2ab = (s) => {
    let buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
    let view = new Uint8Array(buf); //create uint8array as viewer
    for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff; //convert to octet
    return buf;
  };

  let compare = ( a, b ) => {
    if ( parseFloat(a.kriteria) < parseFloat(b.kriteria) ){
      return -1;
    }
    if ( parseFloat(a.kriteria) > parseFloat(b.kriteria) ){
      return 1;
    }
    if ( parseFloat(a.sub) < parseFloat(b.sub) ){
      return -1;
    }
    if ( parseFloat(a.sub) > parseFloat(b.sub) ){
      return 1;
    }
    if ( parseFloat(a.item) < parseFloat(b.item) ){
      return -1;
    }
    if ( parseFloat(a.item) > parseFloat(b.item) ){
      return 1;
    }
    return 0;
  };

  let get_item_data = (i) => {
    switch(i) {
      case "1":
        return Menu1;
      break;
      case "2":
        return Menu2;
      break;
      case "3":
        return Menu3;
      break;
    }
  }; 

  let repair_excel_data = (datas) => {
    return datas.map(data => {

      let menus = get_item_data(data.kriteria);

      let item_data = menus.filter(i => i.No == data.sub)[0];

      console.log("data :", data);
      console.log("item_data :", item_data);

      data.nama_dokumen  = data.dokumen;
      data.lingkup_audit = item_data.Lingkup;
      data.auditee       = item_data.Auditee;
      data.dokumen       = item_data.Dokumen[parseInt(data.item) - 1].Name;
      
      let lengkap = JSON.parse(JSON.stringify(data.lengkap));

      data.lengkap        = "";
      data.tidak_lengkap  = "";
      data.tidak_tersedia = "";

      switch (lengkap) {
        case "1":
          data.lengkap = "✓";
        break;
        case "2":
          data.tidak_lengkap = "✓";
        break;
        case "3":
          data.tidak_tersedia = "✓";
        break;
      }

      let newdata = {};

      newdata.kriteria       = data.kriteria;
      newdata.no             = data.sub;
      newdata.lingkup_audit  = data.lingkup_audit;
      newdata.lingkup_audit  = data.lingkup_audit;
      newdata.auditee        = data.auditee;
      newdata.dokumen        = data.dokumen;
      newdata.tidak_tersedia = data.tidak_tersedia;
      newdata.lengkap        = data.lengkap;
      newdata.tidak_lengkap  = data.tidak_lengkap;
      newdata.nama_dokumen   = data.nama_dokumen;
      newdata.halaman        = data.halaman;
      newdata.dokumen_1      = data.files_1;
      newdata.dokumen_2      = data.files_2;
      newdata.dokumen_3      = data.files_3;
      newdata.dokumen_4      = data.files_4;
      newdata.catatan        = data.catatan;

      /*
      delete data.id;
      delete data.kriteria;
      delete data.sub;
      delete data.item;
      delete data.prodi;
      */

      return newdata;
    })
  };

  let remove_unused_data = (datas) => {
    let new_datas = [];
    for (var i in datas) {

      let data_prev = datas[i - 1];
      let data_now  = datas[i];

      data_now.same_kriteria = "";
      data_now.same_no       = "";

      if (typeof data_prev !== "undefined") {
        if (data_now.kriteria == data_prev.kriteria) {
          data_now.same_kriteria = 1;
        }
        if (data_now.no == data_prev.no) {
          data_now.same_no = 1;
        } 
      }
      new_datas.push(data_now);
    }

    let fix_data = new_datas.map(data => {
      if (data.same_kriteria == 1) {
        data.kriteria = "";
      }
      if (data.same_no == 1) {
        data.no            = "";
        data.lingkup_audit = "";
      }
      delete data.same_kriteria;
      delete data.same_no;
      return data;
    });

    return fix_data;
  };

  let export_excel = () => {
    ondownload = true;
    fetch(API + "/data/read/" + ($auth.program_studi || "-"), {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: $auth.token,
      },
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          let datas = repair_excel_data(data.data);
          datas = remove_unused_data(datas.sort(compare));
          let columns = Object.keys(datas[0]);
          let exceldata = [];
          exceldata.push(columns);
          for (var row of datas) {
            var itemdata = [];
            for (var column of columns) {
              itemdata.push(row[column]);
            }
            exceldata.push(itemdata);
          }
          console.log(exceldata);
          save_excel(exceldata);
        } else {
          console.log(data);
          ondownload = false;
        }
      })
      .catch((res) => {
        console.log(res);
        ondownload = false;
      });
  };

  let save_excel = (ws_data) => {
    let wb = XLSX.utils.book_new();
    wb.Props = {
      Title: "UPPS DATA",
      Subject: "UPPS DATA",
      Author: "FKIP UNRAM",
      CreatedDate: new Date(),
    };
    wb.SheetNames.push("UPPS DATA");

    // let ws_data = [["hello", "world"]];

    let ws = XLSX.utils.aoa_to_sheet(ws_data);

    /*
    // contoh merge s = start, e = end, r = row, c = column
    const merge = [
      { s: { r: 1, c: 0 }, e: { r: 2, c: 0 } },
    ];
    ws["!merges"] = merge;
    */

    wb.Sheets["UPPS DATA"] = ws;

    let wbout = XLSX.write(wb, { bookType: "xlsx", type: "binary" });

    saveAs(
      new Blob([s2ab(wbout)], { type: "application/octet-stream" }),
      "upps_fkip_unram.xlsx"
    );
    ondownload = false;
  };
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="/" use:link>UPPS</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto">
        {#if $auth}
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#!"
              on:click={() => {
                kriteriamenu_active = !kriteriamenu_active;
              }}>
              <i class="fa fa-list-alt" /> KRITERIA
            </a>
            <ul
              class={kriteriamenu_active
                ? "dropdown-menu show"
                : "dropdown-menu"}>
              {#each kriterias as kriteria, i}
                <li>
                  <a
                    href="#!"
                    on:click={() => change_criteria(i)}
                    class={$active_kriteria == i + 1
                      ? "dropdown-item active"
                      : "dropdown-item"}>{kriteria}</a>
                </li>
              {/each}
            </ul>
          </li>
          <li class="nav-item">
            <a href="#!" on:click={export_excel} class="nav-link">
              {#if ondownload}
                <div class="spinner-border spinner-border-sm text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              {:else}
                <i class="fa fa-download" /> EXPORT
              {/if}
            </a>
          </li>
        {/if}
      </ul>

      <ul class="navbar-nav">
        {#if $auth}
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#!"
              on:click={() => {
                usermenu_active = !usermenu_active;
              }}>
              {$auth.username}
            </a>
            <ul
              class={usermenu_active ? "dropdown-menu show" : "dropdown-menu"}
              style="margin-left:-95px">
              <li><a href="#!" class="dropdown-item">Account</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a href="#!" class="dropdown-item" on:click={logout}>Logout</a>
              </li>
            </ul>
          </li>
        {:else}
          <li class="nav-item">
            <a href="/login" class="nav-link" use:link>Login</a>
          </li>
        {/if}
      </ul>
    </div>
  </div>
</nav>

<style>
</style>
