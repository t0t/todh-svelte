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
</style>

<blockquote class="Quote QuoteLine {modificador[variante]}">
    "{quote}"<br>
    <small>{author}</small>
</blockquote>
