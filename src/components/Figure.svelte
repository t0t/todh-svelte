<script>
    export let caption = "Default figure caption";
</script>
<style lang="scss">
    @import "../styles/main.scss";
    figcaption {
        padding-top: $h0;
        padding-right: $h1;
        color: $grey;
        @include type-setting(0);
    }
</style>
<figure>
    <slot/>
    <figcaption>{caption}</figcaption>
</figure>