<script>
    export let text = "Name";
    export let url = "url";
    export let variante = 0;
    let modificador = [
        "Default",
        "Inverse"
    ];
</script>

<style lang="scss">
    @import "../styles/main.scss";
    .Inverse {
        color: $light_grey;
        background-color: $primary;
        &:hover {
            background-color: $dark_grey;
            border: none;
        }
    }
</style>

<button class="{modificador[variante]}">
    <a href="{url}" target="_blank">{text}</a>
</button>