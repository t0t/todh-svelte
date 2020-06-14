<script>
    export let quote;
    export let author;
    export let variante = 0;
    export let modificador = [
        "Default",
        "Grey",
        "Invert"
    ];
</script>

<style lang="scss">
    @import "../styles/main.scss";

    .Quote {
        /* color: $tertiary; */
        font-style: italic;
        margin-bottom: $h1;
        @include type-setting(1);
    }
    .Default {
        color: $white;
    }
    .Invert {
        color: $primary;
    }
    .Grey {
        color: $grey;
    }
</style>

<blockquote class="Quote QuoteLine {modificador[variante]}">
    "{quote}"<br>
    <small>{author}</small>
</blockquote>
