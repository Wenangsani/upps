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
  let data_nama_dokumen = "";

  onMount(() => {
    itemdata =
      $userdata.filter((data) => data.sub == sub && data.item == i)[0] || {};
    data_lengkap = itemdata.lengkap || 0;
    data_halaman = itemdata.halaman || "";
    data_nama_dokumen = itemdata.nama_dokumen || "";
  });

  let inupload = false;

  let dosave = () => {
    // closeall();
  };

  let addlink = () => {
    let link = prompt("Paste link disini ...");
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
          value="option2"
          checked={data_lengkap == 1 ? true : false} />Lengkap</label>
    </div>

    <div class="form-check form-check-inline">
      <label class="form-check-label"
        ><input
          class="form-check-input"
          type="radio"
          name={"opt_" + sub + i}
          value="option2"
          checked={data_lengkap == 2 ? true : false} />Tidak Lengkap</label>
    </div>

    <div class="form-check form-check-inline">
      <label class="form-check-label"
        ><input
          class="form-check-input"
          type="radio"
          name={"opt_" + sub + i}
          value="option1"
          checked={data_lengkap == 3 ? true : false} />Tidak Tersedia</label>
    </div>
  </div>
  <div class="p-2">
    <div class="row">
      <div class="col-md-9">
        <span class="form-label">Nama Dokumen</span>
        <input type="text" class="form-control" bind:value={data_nama_dokumen} />
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
        <span class="ml-2">Uploading...</span>
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
    <div />
  </div>

  <div class="p-2">
    <span class="form-label">Catatan</span>
    <textarea class="form-control" />
  </div>

  <div class="mb-4 p-2">
    <button on:click={() => dosave()} class="btn btn-primary">
      <i class="fa fa-check" /> Save
    </button>
    <button on:click={() => closeform(i)} class="btn btn-light">
      <i class="fa fa-times" /> Cancel
    </button>
  </div>
</div>
