<script>
  import {
    url,
    isActive
  } from "@sveltech/routify";
  let y;
  let home = "/";
  const _links = [
    ["/about", "About TODH"],
    ["/products", "Artifacts"],
    ["/blog", "Blog"],
    ["/styleguide", "Styleguide"]
  ];
  let showControls = false;
  const toggleControls = () => (showControls = !showControls);
</script>

<style lang="scss">
  @import "styles/main.scss";


  .MainNav li {
    font-weight: bold;
  }

  .MainNav li a {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $grey;

    &:hover {
      color: $silver;
    }

    &.selected {
      color: $white;
    }
  }

  .fixed,
  .MainNav {
    position: fixed;
    right: $h1;
  }
  .fixed {
    top: $h1;
    
  }
  .MainNav {
    padding: $h3;
    background-color: $primary;
    border-radius: 50%;
    top: $h1;
    right: $h4;
  }
</style>

<svelte:window bind:scrollY={y} />

{#if y > 340}
<div class="fixed">
  <button class="toggle-button" on:click={toggleControls}>
    {#if showControls}
      X
      {:else}
      Menu
    {/if}
  </button>
    
  {#if showControls}
    <ul class="MainNav">
      <a class="backlink" href={$url(home)}>&#8656; BACK TO APP</a>
      {#each _links as [path, name]}
      <li>
        <a href="{$url(path)}" class:selected="{$isActive(path)}">{name}</a>
      </li>
      {/each}
    </ul>
  {/if}
</div>

{/if}