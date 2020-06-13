<script>
  export let pageTitle;
  export let pageSubTitle;
</script>

<style lang="scss">
  @import "../styles/main.scss";
</style>

<header class="Main__header">
    <hgroup class="text-center">
      <h1>{pageTitle}</h1>
      <h2>{pageSubTitle}</h2>
    </hgroup>
</header>