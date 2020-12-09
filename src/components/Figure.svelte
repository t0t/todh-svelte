<script>
    export let variante = 0;
    export let caption = false;
    export const modificadorImg = [
        "Default",
        "rounded",
        "bordered"
    ];
</script>
<style lang="scss">
    @import "../styles/main.scss";
    figcaption {
        padding-top: $h0;
        padding-right: $h1;
        color: $silver;
        @include type-setting(0);
    }
    /* .Default :global(img) {} */
    .rounded :global(img) {
        border-radius: 50%;
        border-color: $primary;
        border-width: $h3;
        border-style: solid;
    }
    .bordered :global(img) {
        border: $h0 solid $black;
    }
</style>

<figure class="{modificadorImg[variante]}">
    <slot/>
    {#if caption}
    <figcaption>{caption}</figcaption>
    {/if}
</figure>