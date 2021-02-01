<script>
  import { onMount } from "svelte";
  import NavbarGuest from "../component/navbar_guest.svelte";
  import LeftNav from "../component/left_nav.svelte";
  import Footer from "../component/footer.svelte";
  import Menu1 from "../datas/menu_1";

  let listMenu = Menu1;

  let userData = [
    {
      No: "1.1",
      lengkap: 1,
      nama_dokumen: "safdsafsaf safsafsaf"
    },
  ];

  function openform(h, i) {
    for (var item of listMenu) {
      for (var doc of item.Dokumen) {
        doc.hidden = true;
      }
    }

    if (typeof listMenu[h].Dokumen[i].hidden === "undefined") {
      listMenu[h].Dokumen[i].hidden = false;
    } else if (listMenu[h].Dokumen[i].hidden === true) {
      listMenu[h].Dokumen[i].hidden = false;
    }

    listMenu = listMenu;
  }

  function checklengkap(h, i) {
    let res = userData.filter((data) => data.h == h && data.i == i);
    if (res.length > 0) {
      if (res[0].lengkap == 1) {
        return true;
      }
    }
    return false;
  }

  onMount(async () => {
    // document.getElementById("mainvideo").play();
  });
</script>

<NavbarGuest />

<div class="container-xl" style="margin-top:100px">
  <div class="row">
    <div class="col-md-3">
      <LeftNav />
    </div>
    <div class="col-md-9">
      {#each listMenu as { No, Lingkup, Auditee, Catatan, Dokumen }, h}
        <ul class="list-group mb-4">
          <!-- Informasi -->
          <li class="list-group-item">
            <h5 class="text-primary">{No} - {Lingkup}</h5>
            <div>Auditee : {Auditee}</div>
            <div class="alert alert-secondary mt-2 p-2">
              Catatan:
              <ul>
                {#each Catatan as cat}
                  <li>
                    {cat}
                  </li>
                {/each}
              </ul>
            </div>
          </li>
          <!-- Name list-->
          {#each Dokumen as { Name, hidden }, i}
            <li
              class={hidden === false
                ? "list-group-item bg-formactive"
                : "list-group-item"}
            >
              <h6 on:click={() => openform(h, i)} style="cursor:pointer">
                {#if checklengkap(h, i)}
                  <i class="fa fa-check-circle text-success" />
                {:else}
                  <i class="fa fa-circle" />
                {/if}
                {Name}
              </h6>
              <div class={hidden === false ? "d-block" : "d-none"}>
                <div class="mt-4">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name={"opt_" + h + i}
                      id={"rad3_" + h + i}
                      value="option2"
                    />
                    <label
                      class="form-check-label text-success"
                      for={"rad3_" + h + i}>Lengkap</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name={"opt_" + h + i}
                      id={"rad2_" + h + i}
                      value="option2"
                    />
                    <label class="form-check-label" for={"rad2_" + h + i}
                      >Tidak Lengkap</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name={"opt_" + h + i}
                      id={"rad1_" + h + i}
                      value="option1"
                    />
                    <label class="form-check-label" for={"rad1_" + h + i}
                      >Tidak Tersedia</label
                    >
                  </div>
                </div>
                <div class="mt-2">
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
                <div class="mt-2">
                  <div>Files</div>
                  <div>
                    <input class="form-control" type="file" />
                    <input class="form-control mt-1" type="file" />
                    <input class="form-control mt-1" type="file" />
                    <input class="form-control mt-1" type="file" />
                  </div>
                </div>
                <div class="mt-2">
                  <span class="form-label">Catatan</span>
                  <textarea class="form-control" />
                </div>
                <div class="mt-2 mb-4">
                  <button class="btn btn-primary"><i class="fa fa-check"></i> Save</button>
                </div>
              </div>
            </li>
          {/each}
        </ul>
      {/each}
    </div>
  </div>
</div>

<Footer />

<style>
  :global(.bg-formactive) {
    background-color: #f0f8fd !important;
  }
</style>
