<script>
  import { active_item } from "../store";
  import { onMount } from "svelte";

  export let menus;

  onMount(() => {
    active_item.update(() => menus[0].No);
  });

  let gclass = "list-group-item list-group-item-action";

  let changeActive = (no) => {
    active_item.update(() => no);
  };
</script>

<nav class="list-group">
  {#each menus as menu}
    <a
      href="#!"
      on:click={() => {
        changeActive(menu.No);
      }}
      class={$active_item == menu.No ? gclass + " active" : gclass}>
      {menu.No} » {menu.Lingkup}
    </a>
  {/each}
</nav>
