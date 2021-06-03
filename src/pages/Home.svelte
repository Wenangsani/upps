<script>
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";
  import { active_kriteria, active_lingkup, userdata, auth } from "../store";
  import LeftNav from "../component/left_nav.svelte";
  import Navbar from "../component/navbar.svelte";
  import Item from "../component/item.svelte";
  import Menu1 from "../datas/menu_1";
  import Menu2 from "../datas/menu_2";

  let menus = Menu1;
  let hasdata = false;

  $: {
    switch($active_kriteria) {
      case 1:
        menus = Menu1;
      break;
      case 2:
        menus = Menu2;
      break;
      case 3:
        menus = Menu3;
      break;
    }
  }

  onMount(async () => {
    // Redirect if user no login
    if ($auth === false) {
      navigate("/login", { replace: true });
    } else {
      fetch(API + "/data/read/" + ($auth.program_studi || "-"), {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: $auth.token,
        },
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            console.log(data.data);
            userdata.update(() => data.data);
            setTimeout(() => {
              hasdata = true;
            }, 1000);
          } else {
            console.log(data);
          }
        })
        .catch((res) => {
          console.log(res);
        });
    }
  });
</script>

<Navbar />

<div class="container-xl" style="margin-top:25px">
  {#if hasdata}
    <div class="row">
      <div class="col-md-4">
        <LeftNav {menus} />
      </div>
      <div class="col-md-8">
        {#each menus as menu}
          {#if $active_lingkup == menu.No}
            <Item {menu} />
          {/if}
        {/each}
      </div>
    </div>
  {:else}
    <div class="text-center">
      <div
        class="spinner-grow text-primary"
        role="status"
        style="margin-top:10%">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  {/if}
</div>

<style>
  :global(.bg-formactive) {
    border: 2px solid #9cc4ff !important;
  }
</style>
