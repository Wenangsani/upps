<script>
  import ItemForm from "../component/item_form.svelte";

  export let menu;

  let closeall = () => {
    for (var doc of menu.Dokumen) {
      doc.hidden = true;
    }
  };

  let closeform = (i) => {
    menu.Dokumen[i - 1].hidden = true;
  };

  let openform = (i) => {
    closeall();
    if (typeof menu.Dokumen[i].hidden === "undefined") {
      menu.Dokumen[i].hidden = false;
    } else if (menu.Dokumen[i].hidden === true) {
      menu.Dokumen[i].hidden = false;
    }
  };

  let set_lengkap = (i) => {
    menu.Dokumen[i - 1].lengkap = true;
  };
</script>

<ul class="list-group" style="margin-bottom:4rem">
  <!-- Informasi -->
  <li class="list-group-item">
    <h4 class="text-dark fw-bold">{menu.No} » {menu.Lingkup}</h4>
    <br/>
    <div>Auditee: {menu.Auditee}</div>
    {#if menu.Catatan.length > 0}
      <div class="my-2">
        Catatan:
        <ul>
          {#each menu.Catatan as cat}
            <li>{cat}</li>
          {/each}
        </ul>
      </div>
    {/if}
  </li>
  <!-- Name list-->
  {#each menu.Dokumen as { Name, hidden, lengkap }, i}
    <li
      class={hidden === false
        ? "list-group-item bg-formactive"
        : "list-group-item"}>
        <span class="float-end">
          {#if lengkap}
            <i class="fa fa-check-double text-success"/>
          {/if}
        </span>
      <h6 on:click={() => openform(i)} style="cursor:pointer">
        {i + 1}. {Name}
      </h6>
      <ItemForm sub={menu.No} i={i + 1} {hidden} {closeform} {set_lengkap}/>
    </li>
  {/each}
</ul>
