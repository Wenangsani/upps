<script>
  export let h;
  export let menu;
  export let userdata;

  function closeall() {
    for (var item of listMenu) {
      for (var doc of item.Dokumen) {
        doc.hidden = true;
      }
    }
    listMenu = listMenu;
  }

  function openform(h, i) {
    // closeall();

    if (typeof listMenu[h].Dokumen[i].hidden === "undefined") {
      listMenu[h].Dokumen[i].hidden = false;
    } else if (listMenu[h].Dokumen[i].hidden === true) {
      listMenu[h].Dokumen[i].hidden = false;
    }

    listMenu = listMenu;
  }

  function dosave() {
    closeall();
  }

  function checklengkap(h, i) {
    let res = userdata.filter((data) => data.h == h && data.i == i);
    if (res.length > 0) {
      if (res[0].lengkap == 1) {
        return true;
      }
    }
    return false;
  }
</script>

<ul class="list-group" style="margin-bottom:4rem">
  <!-- Informasi -->
  <li class="list-group-item">
    <h5 class="text-primary">{menu.No} - {menu.Lingkup}</h5>
    <div class="alert alert-secondary mt-2 p-2">
      Catatan :
      <ul>
        {#each menu.Catatan as cat}
          <li>
            {cat}
          </li>
        {/each}
      </ul>
      <div>Auditee : {menu.Auditee}</div>
    </div>
  </li>
  <!-- Name list-->
  {#each menu.Dokumen as { Name, hidden }, i}
    <li
      class={hidden === false
        ? "list-group-item bg-formactive"
        : "list-group-item"}>
      <h6 on:click={() => openform(h, i)} style="cursor:pointer">
        {i + 1} . {Name}
      </h6>
      <div class={hidden === false ? "d-block" : "d-none"}>
        <div class="mt-2 p-2">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name={"opt_" + h + i}
              id={"rad3_" + h + i}
              value="option2" />
            <label class="form-check-label text-success" for={"rad3_" + h + i}
              >Lengkap</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name={"opt_" + h + i}
              id={"rad2_" + h + i}
              value="option2" />
            <label class="form-check-label" for={"rad2_" + h + i}
              >Tidak Lengkap</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name={"opt_" + h + i}
              id={"rad1_" + h + i}
              value="option1" />
            <label class="form-check-label" for={"rad1_" + h + i}
              >Tidak Tersedia</label>
          </div>
        </div>
        <div class="p-2">
          <div class="row">
            <div class="col-md-9">
              <span class="form-label">Nama Dokumen</span>
              <input type="text" class="form-control" />
            </div>
            <div class="col-md-3">
              <span class="form-label">Halaman</span>
              <input type="text" class="form-control" />
            </div>
          </div>
        </div>
        <div class="p-2">
          <div>Files</div>
          <div>
            <input class="form-control" type="file" />
            <input class="form-control mt-1" type="file" />
            <input class="form-control mt-1" type="file" />
            <input class="form-control mt-1" type="file" />
          </div>
        </div>
        <div class="p-2">
          <span class="form-label">Catatan</span>
          <textarea class="form-control" />
        </div>
        <div class="mb-4 p-2">
          <button on:click={() => dosave()} class="btn btn-primary"
            ><i class="fa fa-check" /> Save</button>
          <button on:click={() => dosave()} class="btn btn-warning"
            ><i class="fa fa-times" /> Cancel</button>
        </div>
      </div>
    </li>
  {/each}
</ul>
