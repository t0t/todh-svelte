<script>
    export let variante = 0;
    export let modificador = [
        "BannerDefault",
        "BannerBlack",
        "BannerAlert"
    ];
</script>

<style lang="scss">
    @import "../styles/main.scss";
    .Banner {
        :global(div) {
            color: $tertiary;
        }
        :global(h2) {
            color: $primary;
        }
        position: relative;
        /* justify-items: center; */
    }
    .BannerDefault {
        background-color: $black_primary;
        path {
            stroke: $grey;
            fill: $tertiary;
        }
    }
    .BannerBlack {
        background-color: #363636;
        blockquote {
            color: $primary;
        }
        :global(h2) {
            color: $silver;
        }
    }
    .BannerAlert {
        :global(h2) {
            color: $light_grey;
            margin-bottom: $h3;
        }
        background-color: $primary;
    }
</style>

<div class="Banner {modificador[variante]}">
    <slot name="image"></slot>
    <slot></slot>
</div>