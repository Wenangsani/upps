<script>
  import { onMount } from "svelte";
  import { auth, userdata, active_kriteria } from "../store";
  export let sub;
  export let i;
  export let hidden;
  export let closeform;

  let onsave = false;
  let saved = false;

  let data_lengkap = 0;
  let data_halaman = "";
  let data_dokumen = "";
  let data_catatan = "";
  let data_files_1 = "";
  let data_files_2 = "";
  let data_files_3 = "";
  let data_files_4 = "";

  let reset = () => {
    let itemdata =
      $userdata.filter(
        (data) => data.sub == sub && data.item == i.toString()
      )[0] || false;
    if (itemdata) {
      data_lengkap = itemdata.lengkap;
      data_halaman = itemdata.halaman;
      data_dokumen = itemdata.dokumen;
      data_catatan = itemdata.catatan;
      data_files_1 = itemdata.files_1;
      data_files_2 = itemdata.files_2;
      data_files_3 = itemdata.files_3;
      data_files_4 = itemdata.files_4;
    }
  };

  let cancel = () => {
    reset();
  };

  onMount(() => {
    reset();
  });

  let inupload = false;

  let dosave = () => {
    onsave = true;

    let newdata = {
      kriteria: $active_kriteria,
      sub: sub,
      item: i,
      lengkap: data_lengkap,
      dokumen: data_dokumen,
      halaman: data_halaman,
      catatan: data_catatan,
      files_1: data_files_1,
      files_2: data_files_2,
      files_3: data_files_3,
      files_4: data_files_4,
    };
    let olddata = $userdata.filter((data) => data.sub != sub || data.item != i);
    olddata.push(newdata);
    userdata.update(() => olddata);

    fetch(API + "/data/create", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: $auth.token,
      },
      method: "POST",
      body: JSON.stringify(newdata),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log(data);
          saved = true;
          setTimeout(() => {
            saved = false;
          }, 5000);
        } else {
          console.log(data);
        }
        onsave = false;
      })
      .catch((res) => {
        console.log(res);
        onsave = false;
      });
  };

  let addlink = (link) => {
    link = link || prompt("Paste link disini ...");
    if (link) {
      if (!data_files_1) {
        data_files_1 = link;
      } else if (!data_files_2) {
        data_files_2 = link;
      } else if (!data_files_3) {
        data_files_3 = link;
      } else if (!data_files_4) {
        data_files_4 = link;
      } else {
        alert("Maksimum 4 file.");
      }
    }
  };

  let mclass = (pre) => {
    return `${pre}_${sub.replace(".", "__")}_${i}`;
  };

  let file_upload = (event) => {
    event.preventDefault();

    const files = event.target.files;

    inupload = true;
    const data = new FormData();
    data.append("userfile", files[0], files[0].name);

    console.log(files[0]);

    fetch(API + "/data/upload_file", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: $auth.token,
      },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          addlink(API + "/uploads/" + data.data.file_name);
        } else {
          alert(data.content);
        }
        inupload = false;
      });
  };
</script>

<div class={hidden === false ? "d-block mt-4" : "d-none"}>
  <div class="my-2 p-2">
    <div class="form-check form-check-inline">
      <label class="form-check-label text-success">
        <input
          class="form-check-input"
          type="radio"
          name={mclass("opt")}
          value="1"
          checked={data_lengkap == "1" ? true : false}
          bind:group={data_lengkap} />Lengkap</label>
    </div>

    <div class="form-check form-check-inline">
      <label class="form-check-label"
        ><input
          class="form-check-input"
          type="radio"
          name={mclass("opt")}
          value="2"
          checked={data_lengkap == "2" ? true : false}
          bind:group={data_lengkap} />Tidak Lengkap</label>
    </div>

    <div class="form-check form-check-inline">
      <label class="form-check-label"
        ><input
          class="form-check-input"
          type="radio"
          name={mclass("opt")}
          value="3"
          checked={data_lengkap == "3" ? true : false}
          bind:group={data_lengkap} />Tidak Tersedia</label>
    </div>
  </div>
  <div class="p-2">
    <div class="row">
      <div class="col-md-9">
        <span class="form-label">Nama Dokumen</span>
        <input type="text" class="form-control" bind:value={data_dokumen} />
      </div>

      <div class="col-md-3">
        <span class="form-label">Halaman</span>
        <input type="text" class="form-control" bind:value={data_halaman} />
      </div>
    </div>
  </div>
  <div class="p-2">
    <div>Files</div>
    <div class="my-2">
      {#if inupload}
        <div
          class="spinner-border spinner-border-sm text-primary"
          role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <span class="ml-2 text-muted">Uploading...</span>
      {:else}
        <button
          on:click={() => {
            document.querySelector("#" + mclass("file")).click();
          }}
          class="btn btn-light">
          <i class="fa fa-arrow-circle-up" /> Upload
        </button>
        <input
          type="file"
          id={mclass("file")}
          style="display:none"
          on:change={file_upload} />
        <button on:click={() => addlink()} class="btn btn-light">
          <i class="fa fa-link" /> Link
        </button>
      {/if}
    </div>

    <div class="my-2 mt-4">
      {#if data_files_1}
        <div>
          <a href={data_files_1} target="_blank"
            ><i class="fa fa-external-link-alt" />{data_files_1}</a>
          <span style="margin-left:16px"
            ><i
              class="fa fa-trash"
              on:click={() => {
                data_files_1 = "";
              }} /></span>
        </div>
      {/if}
      {#if data_files_2}
        <div>
          <a href={data_files_2} target="_blank"
            ><i class="fa fa-external-link-alt" />{data_files_2}</a>
          <span style="margin-left:16px"
            ><i
              class="fa fa-trash"
              on:click={() => {
                data_files_2 = "";
              }} /></span>
        </div>
      {/if}
      {#if data_files_3}
        <div>
          <a href={data_files_3} target="_blank"
            ><i class="fa fa-external-link-alt" />{data_files_3}</a>
          <span style="margin-left:16px"
            ><i
              class="fa fa-trash"
              on:click={() => {
                data_files_3 = "";
              }} /></span>
        </div>
      {/if}
      {#if data_files_4}
        <div>
          <a href={data_files_4} target="_blank"
            ><i class="fa fa-external-link-alt" />{data_files_4}</a>
          <span style="margin-left:16px"
            ><i
              class="fa fa-trash"
              on:click={() => {
                data_files_4 = "";
              }} /></span>
        </div>
      {/if}
    </div>
  </div>

  <div class="p-2">
    <span class="form-label">Catatan</span>
    <textarea class="form-control" bind:value={data_catatan} />
  </div>

  {#if saved}
    <div class="alert alert-success m-2" role="alert">
      <i class="fa fa-check-double" /> Saved ...
    </div>
  {/if}

  {#if onsave}
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  {:else}
    <div class="mb-4 p-2">
      <button
        on:click={() => {
          dosave();
        }}
        class="btn btn-primary">
        <i class="fa fa-check" /> Save
      </button>
      <button
        on:click={() => {
          closeform(i);
          cancel();
        }}
        class="btn btn-light">
        <i class="fa fa-times" /> Cancel
      </button>
    </div>
  {/if}
</div>
