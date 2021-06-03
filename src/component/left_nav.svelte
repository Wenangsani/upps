<script>
  import { active_lingkup } from "../store";
  import { onMount } from "svelte";

  export let menus;

  let gclass = "list-group-item list-group-item-action";

  onMount(() => {
    active_lingkup.update(() => menus[0].No);
  });

  let changeActive = (no) => {
    active_lingkup.update(() => no);
  };
</script>

<nav class="list-group">
  {#each menus as menu}
    <a
      href="#!"
      on:click={() => {
        changeActive(menu.No);
      }}
      class={$active_lingkup == menu.No ? gclass + " list-group-item-dark" : gclass}>
      <div>{menu.No} » {menu.Lingkup}</div>
    </a>
  {/each}
</nav>
