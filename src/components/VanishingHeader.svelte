<script>
    export let duration = "300ms";
    export let offset = 0;
    export let tolerance = 0;
  
    let headerClass = "show";
    let y = 0;
    let lastY = 0;
  
    function deriveClass(y, dy) {
      if (y < offset) {
        return "show";
      }
  
      if (Math.abs(dy) <= tolerance) {
        return headerClass;
      }
  
      if (dy < 0) {
        return "show";
      }
  
      return "hide";
    }
  
    function updateClass(y) {
      const dy = lastY - y;
      lastY = y;
      return deriveClass(y, dy);
    }
  
    function setTransitionDuration(node) {
      node.style.transitionDuration = duration;
    }
  
    $: headerClass = updateClass(y);
  </script>
  
  <style lang="scss">
    @import "../styles/main.scss";
    div {
      position: fixed;
      width: 100%;
      top: 0;
      transition: transform 300ms ease-in-out;
      z-index: 1000;
      background-color: $site_background;
    }
    .show {
      transform: translateY(0%);
    }
    .hide {
      transform: translateY(-100%);
    }
</style>
  
  <svelte:window bind:scrollY={y} />
  
  <div use:setTransitionDuration class={headerClass}>
      <slot />
  </div>