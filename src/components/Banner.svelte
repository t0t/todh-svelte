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
        /* justify-items: center; */
    }
    .BannerDefault {
        background-color: $secondary;
        stroke: $tertiary;
        fill: $tertiary;
    }
    .BannerBlack {
        background-color: $tertiary;
        color: $primary;
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