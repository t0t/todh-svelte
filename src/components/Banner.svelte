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
        background-color: $tertiary;
        blockquote {
            color: $primary;
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