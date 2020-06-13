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
        color: $primary;
        font-style: italic;
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
    <strong>"{quote}"</strong><br>
    <small>{author}</small>
</blockquote>
