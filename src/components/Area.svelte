<script>
    export let title = "";
</script>

<style lang="scss">
    @import "../styles/main.scss";

    .Area {
        padding-top: $h1;
        padding-right: $h1;
        padding-bottom: $h1;
        padding-left: $h1;

        @include media(s1) {
            padding-top: $h2;
            padding-right: $h3;
            padding-bottom: $h2;
            padding-left: $h3;
        }
        @include media(s2) {
            max-width: $h9;
            margin-left: auto;
            margin-right: auto;
        }
        @include media(s4) {
            max-width: $h10;
        }
    }

    h3,
    h5 {
        padding-bottom: $h2;
        color: currentColor;
    }
</style>

<article class="Area">
    {#if title}
        <h3>{title}</h3>
    {/if}
    <slot></slot>
</article>