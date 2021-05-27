<script>
  import Navbar from "../component/navbar.svelte";
  import { auth } from "../store";
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";

  let username, password = null;
  let onload = false;
  let alerts = false; 

  onMount(() => {
    // Redirect if user has login
    if ($auth !== false) {
      navigate("/", { replace: true });
    }
  });

  let login = (e) => {
    
    onload = true;

    e.preventDefault();

    if (username && password) {
      fetch(API + "/login", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ username, password }),
      })
        .then((res) => res.json())
        .then((data) => {
          onload = false;
          if (data.success) {
            window.localStorage.setItem("auth", JSON.stringify(data.data));
            auth.update(() => data.data);
            navigate("/", { replace: true });
          } else {
            alerts = data.data || data.content;
          }
        })
        .catch((res) => {
          console.log(res);
          onload = false;
        });
    } else {
      onload = false;
      alerts = "Input blanks.";
    }
  };
</script>

<Navbar />

<div class="container mb-4" style="margin-top:100px;">
  <div class="row justify-content-md-center mt-4">
    <div class="col-md-4">
      {#if onload}
      <div class="text-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      {:else}
      <div class="text-center">
        <h2>UPPS SIGN IN</h2>
      </div>
      {#if alerts}
        <div class="alert alert-danger">
          {#if typeof alerts === "string"}
            <div>- {alerts}</div>
          {:else}
            {#each Object.values(alerts) as alert}
              <div>- {alert}</div>
            {/each}
          {/if}
        </div>
      {/if}
      <form on:submit={login} class="mt-4">
        <div class="mt-4 mb-3">
          <input
            bind:value={username}
            type="text"
            class="form-control"
            placeholder="Username" />
        </div>
        <div class="mb-4 mb-3">
          <input
            bind:value={password}
            type="password"
            class="form-control"
            placeholder="Password" />
        </div>
        <div class="d-grid gap-2">
          <button type="submit" class="btn btn-primary">Login</button>
        </div>
      </form>
      {/if}
    </div>
  </div>
</div>
