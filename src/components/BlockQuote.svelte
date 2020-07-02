<script>
    export let quote;
    export let author;
    export let variante = 0;
    export let modificador = [
        "Default",
        "Grey",
        "Invert",
        "Basic"
    ];
</script>

<style lang="scss">
    @import "../styles/main.scss";
    .Grey {
        color: $silver;
        /* font-weight: normal; */
    }
    .Basic {
        color: red;
    }
</style>

<blockquote class="Quote {modificador[variante]}">
    {quote}
    <small>{author}</small>
</blockquote>
