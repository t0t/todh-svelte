<script>
    export let title;
</script>
<style lang="scss">
    @import "../styles/main.scss";
    h3 {
        padding-bottom: $h1;
    }
</style>
<section>
    {#if title}
        <h3>{title}</h3>
    {/if}
    <slot></slot>
</section>