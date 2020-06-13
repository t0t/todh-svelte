<script context="module">
  let current;
</script>

<script>
  export let src;
  export let title;
  export let composer;
  export let performer;

  let audio;
  let paused = true;

  function stopOthers() {
    if (current && current !== audio) current.pause();
    current = audio;
  }
</script>

<style lang="scss">
  @import "../styles/main.scss";

  .playing {
    color: $primary;
  }

  div {
    display: grid;
    grid-template-columns: 1fr;

    audio {
      padding-bottom: $h1;
    }
  }

  small {
    padding-bottom: 0;
    color: $alpha_grey;
  }

</style>

<div class:playing={!paused}>
  <audio bind:this={audio} bind:paused on:play={stopOthers} controls {src} />
  <small>
    {title} {composer} / performed by {performer}
  </small>

</div>