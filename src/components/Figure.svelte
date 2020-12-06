<script>
    export let img = 0;
    export let caption = false;
    export const modificadorImg = [
        "Default",
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
    .Default {
        color: black;
    }
    .bordered :global(img) {
        border: $h0 solid $black;
    }
</style>

<figure class="{modificadorImg[img]}">
    <slot/>
    {#if caption}
    <figcaption>{caption}</figcaption>
    {/if}
</figure>