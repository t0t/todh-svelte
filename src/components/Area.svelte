<script>
    export let title = "";
</script>

<style lang="scss">
    @import "../styles/main.scss";

    .Area {
        @include media(s1) {
            margin-bottom: $h1;
            padding: $h1;
        }
        @include media(s2) {
            padding: $h2;
        }
        @include media(s3) {
            margin-left: $h4;
            margin-right: $h4;
            padding: $h2;
        }
    }
    /* .Banner ~ .Area{
        margin-top: $h4;
    } */
    h3,
    h5 {
        text-align: center;
        padding-bottom: $h1;
        color: $alpha_grey;
    }
    
</style>

<article class="Area">
    {#if title}
        <h3>{title}</h3>
    {/if}
    <slot></slot>
</article>