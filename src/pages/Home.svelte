<script>
  import { onMount } from "svelte";
  import { active_item } from "../store";
  import Menu1 from "../datas/menu_1";
  import { navigate } from "svelte-routing";
  import { auth } from "../store";
  import LeftNav from "../component/left_nav.svelte";
  import Navbar from "../component/navbar.svelte";
  import Item from "../component/item.svelte";

  let menus = Menu1;

  onMount(async () => {
    // document.getElementById("mainvideo").play();
    // Redirect if user no login
    if ($auth === false) {
      navigate("/login", { replace: true });
    }
  });
</script>

<Navbar />

<div class="container-xl" style="margin-top:25px">
  <div class="row">
    <div class="col-md-4">
      <LeftNav {menus} />
    </div>
    <div class="col-md-8">
      {#each menus as menu}
        {#if $active_item == menu.No}
          <Item {menu} />
        {/if}
      {/each}
    </div>
  </div>
</div>

<style>
  :global(.bg-formactive) {
    border: 2px solid #9cc4ff !important;
  }
</style>
