<script>
    import { link } from "svelte-routing";
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-white p-3 px-4 fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="/" use:link>UPPS</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
    </div>
  </div>
</nav>

<style>
</style>
