<script>
  import { onMount } from "svelte";
  import { userdata } from "../store";
  export let sub;
  export let i;
  export let hidden;
  export let closeform;

  let itemdata = {};
  let data_lengkap = 0;
  let data_halaman = "";
  let data_dokumen = "";
  let data_catatan = "";
  let data_files_1 = "";
  let data_files_2 = "";
  let data_files_3 = "";
  let data_files_4 = "";

  let reset = () => {
    itemdata = $userdata.filter((data) => data.sub == sub && data.item == i)[0] || {};
    data_lengkap = itemdata.lengkap || 0;
    data_halaman = itemdata.halaman || "";
    data_dokumen = itemdata.dokumen || "";
    data_catatan = itemdata.catatan || "";
    data_files_1 = itemdata.files_1 || "";
    data_files_2 = itemdata.files_2 || "";
    data_files_3 = itemdata.files_3 || "";
    data_files_4 = itemdata.files_4 || "";
    console.log("reset userdata :", $userdata);
  };

  let cancel = () => {
    reset();
  };

  onMount(() => {
    reset();
  });

  let inupload = false;

  let dosave = () => {
    let newdata = {
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
    console.log("dosave olddata :", olddata);
    olddata.push(newdata);
    console.log("dosave olddata :", olddata);
    userdata.update(() => olddata);
  };

  let addlink = () => {
    let link = prompt("Paste link disini ...");
    if (link) {
      if (!data_files_1) {
        data_files_1 = link;
      } else if (!data_files_2) {
        data_files_2 = link;
      } else if (!data_files_3) {
        data_files_3 = link;
      } else if (!data_files_4) {
        data_files_4 = link;
      }
    }
  };
</script>

<div class={hidden === false ? "d-block" : "d-none"}>
  <div class="my-2 p-2">
    <div class="form-check form-check-inline">
      <label class="form-check-label text-success">
        <input
          class="form-check-input"
          type="radio"
          name={"opt_" + sub + i}
          value="1"
          checked={data_lengkap == 1 ? true : false} />Lengkap</label>
    </div>

    <div class="form-check form-check-inline">
      <label class="form-check-label"
        ><input
          class="form-check-input"
          type="radio"
          name={"opt_" + sub + i}
          value="2"
          checked={data_lengkap == 2 ? true : false} />Tidak Lengkap</label>
    </div>

    <div class="form-check form-check-inline">
      <label class="form-check-label"
        ><input
          class="form-check-input"
          type="radio"
          name={"opt_" + sub + i}
          value="3"
          checked={data_lengkap == 3 ? true : false} />Tidak Tersedia</label>
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
            document.querySelector("#file_" + sub + i).click();
          }}
          class="btn btn-light">
          <i class="fa fa-arrow-circle-up" /> Upload
        </button>
        <input
          type="file"
          id={"file_" + sub + i}
          style="display:none"
          on:change={() => {
            inupload = true;
          }} />
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
          <span style="margin-left:16px"><i class="fa fa-trash" /></span>
        </div>
      {/if}
      {#if data_files_2}
        <div>
          <a href={data_files_2} target="_blank"
            ><i class="fa fa-external-link-alt" />{data_files_2}</a>
          <span style="margin-left:16px"><i class="fa fa-trash" /></span>
        </div>
      {/if}
      {#if data_files_3}
        <div>
          <a href={data_files_3} target="_blank"
            ><i class="fa fa-external-link-alt" />{data_files_3}</a>
          <span style="margin-left:16px"><i class="fa fa-trash" /></span>
        </div>
      {/if}
      {#if data_files_4}
        <div>
          <a href={data_files_4} target="_blank"
            ><i class="fa fa-external-link-alt" />{data_files_4}</a>
          <span style="margin-left:16px"><i class="fa fa-trash" /></span>
        </div>
      {/if}
    </div>
  </div>

  <div class="p-2">
    <span class="form-label">Catatan</span>
    <textarea class="form-control" bind:value={data_catatan} />
  </div>

  <div class="mb-4 p-2">
    <button
      on:click={() => {
        closeform(i);
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
</div>
