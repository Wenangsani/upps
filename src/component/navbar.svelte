<script>
  import { auth } from "../store";
  import { link } from "svelte-routing";

  let usermenu_active, kriteriamenu_active = false;
  let kriterias = [
    "KRITERIA 1 » VISI, MISI, TUJUAN DAN STRATEGI",
    "KRITERIA 2 » TATA PAMONG DAN TATA KELOLA",
    "KRITERIA 3 » MAHASISWA",
    "KRITERIA 4 » SUMBER DAYA",
    "KRITERIA 5 » KEUANGAN, SARANA, DAN PRASARANA",
    "KRITERIA 6 » KURIKULUM",
    "KRITERIA 7 » PENELITIAN",
    "KRITERIA 8 » PENGABDIAN KEPADA MASYARAKAT",
    "KRITERIA 9 » LUARAN DAN CAPAIAN TRIDHARMA"
  ];

  let logout = () => {
    window.localStorage.removeItem("auth");
    auth.update(() => false);
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
              <i class="fa fa-list-alt"></i> KRITERIA
            </a>
            <ul class={kriteriamenu_active ? "dropdown-menu show" : "dropdown-menu"}>
              {#each kriterias as kriteria, i}
                <li>
                  <a href={i} class="dropdown-item">{kriteria}</a>
                </li>
              {/each}
            </ul>
          </li>
          <li class="nav-item">
            <a href="#!" class="nav-link">
              <i class="fa fa-download"></i> EXPORT
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
