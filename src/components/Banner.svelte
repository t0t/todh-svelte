<script>
    export let variante = 0;
    export let modificador = [
        "BannerBlack",
        "BannerDefault",
        "BgColorAlert"
    ];
</script>

<style lang="scss">
    @import "../styles/main.scss";
    .BannerDefault {
        background-color: $alpha_white;
        stroke: $tertiary;
        fill: $tertiary;
    }
    .BannerBlack {
        color: $white;
        background-color: $primary;
    }
</style>

<div class="Banner {modificador[variante]}">
    <slot name="image"></slot>
    <slot></slot>
</div>