<script>
  import {
    url,
    isActive
  } from "@sveltech/routify";
  import SiteBrand from "./components/SiteBrand.svelte";
  let y;
  let home = "/";
  const _links = [
    ["./about", "TODH"],
    ["./products", "Artifacts"],
    ["./blog", "Blog"],
    ["./styleguide", "LAB"]
  ];
  const _linksLeft = [
    ["./about", "TODH"],
    ["./products", "Artifacts"]
  ];
  const _linksRight = [
    ["./styleguide", "LAB"],
    ["./blog", "Blog"]
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

  .NavBar {
    display: grid;
    grid-template-areas: 
    "c c c"
    "l r r"
    ;
    @include media(s1) {
      grid-template-columns: 1fr .1fr 1fr;
      grid-template-areas: 
      "l c r"
      ;
    }
    @include media(s2) {
      justify-items: center;
    }
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      li a {
        padding: $h0;
      }
      .selected {
        color: $primary;
        font-weight: bold;
      }
    }
  }
  .NavBar__left {
    grid-area: l;
    justify-self: end;
  }
  .NavBar__center {
    grid-area: c;
    justify-self: center;
    min-height: $h4;
    display: flex;
    align-items: center;
  }
  .NavBar__right {
    grid-area: r;
    justify-self: start;
  }
</style>

<svelte:window bind:scrollY={y} />


<nav class="NavBar">
  <ul class="NavBar__left">
    {#each _linksLeft as [path, name]}
    <li>
      <a href="{$url(path)}" class:selected="{$isActive(path)}">{name}</a>
    </li>
    {/each}
  </ul>
  
  <div class="NavBar__center">
    <SiteBrand/>
  </div>
  
  <ul class="NavBar__right">
    {#each _linksRight as [path, name]}
    <li>
      <a href="{$url(path)}" class:selected="{$isActive(path)}">{name}</a>
    </li>
    {/each}
  </ul>
</nav>

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
      <a class="backlink" href={$url(home)}>&#8656; BACK TO HOME</a>
      {#each _links as [path, name]}
      <li>
        <a href="{$url(path)}" class:selected="{$isActive(path)}">{name}</a>
      </li>
      {/each}
    </ul>
  {/if}
</div>

{/if}