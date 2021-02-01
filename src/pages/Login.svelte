<script>
  import NavbarGuest from "../component/navbar_guest.svelte";
  import Footer from "../component/footer.svelte";
  import { link } from "svelte-routing";
</script>

<NavbarGuest />

<div class="container mb-4" style="margin-top:100px;">
  <div class="row justify-content-md-center mt-4">
    <div class="col-md-7">
      <div class="text-center text-arq">
        <h1>SIGN IN</h1>
      </div>
      <div>
        <div class="mt-4 mb-3">
          <input
            type="email"
            class="form-control form-control-lg no-radius text-arq"
            placeholder="Email Address"
          />
        </div>
        <div class="mb-4">
          <input
            type="password"
            class="form-control form-control-lg no-radius text-arq"
            placeholder="Password"
          />
        </div>
        <div class="d-grid gap-2">
          <button type="button" class="btn btn-dark btn-lg no-radius text-arq"
            >SIGN IN</button
          >
        </div>
      </div>
      <div class="text-center mt-4">
        <small><a href="#!" class="text-dark">Forgot password?</a></small>
      </div>
      <div class="text-center mt-3">
        <small
          >New to Alomoves? <a href="/register" class="text-dark" use:link>Sign Up</a></small
        >
      </div>

      <div class="row my-4 py-4">
        <div class="col"><hr /></div>
        <div class="col-auto text-muted text-arq">OR</div>
        <div class="col"><hr /></div>
      </div>

      <div class="d-grid gap-2">
        <button type="button" class="btn btn-light btn-lg no-radius text-arq"
          >SIGN IN WITH APPLE</button
        >
      </div>

      <div class="d-grid gap-2 mt-3 mb-4">
        <button type="button" class="btn btn-light btn-lg no-radius text-arq"
          >SIGN IN WITH FACEBOOK</button
        >
      </div>

      <br/>
      <br/>

    </div>
  </div>
</div>

<hr />

<Footer />

<style>
  .text-arq {
    font-family: "Arquitecta", Helvetica, Arial, sans-serif;
  }
  .no-radius {
    border-radius: 0px !important;
  }
</style>
