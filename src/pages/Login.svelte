<script>
  import NavbarGuest from "../component/navbar_guest.svelte";
  import { link } from "svelte-routing";
</script>

<NavbarGuest />

<div class="container mb-4" style="margin-top:100px;">
  <div class="row justify-content-md-center mt-4">
    <div class="col-md-5">
      <div class="text-center">
        <h1>SIGN IN</h1>
      </div>
      <div>
        <div class="mt-4 mb-3">
          <input
            type="text"
            class="form-control form-control-lg"
            placeholder="Username" />
        </div>
        <div class="mb-4 mb-3">
          <input
            type="password"
            class="form-control form-control-lg"
            placeholder="Password" />
        </div>
        <div class="d-grid gap-2">
          <button type="button" class="btn btn-dark btn-lg">SIGN IN</button>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
</style>
