<script>
    export let variante = 0;
    export let src = "#";
    // export let caption = false;
    export const modificadorImg = [
        "Default",
        "floatedleft",
    ];
</script>
<style lang="scss">
    @import "../styles/main.scss";
    .floatedleft {
        float: left;
        margin-right: 40px;
        max-width: 300px;
    }
</style>

<img class="{modificadorImg[variante]}" src={src} alt="Imagen de Obra Grafica"/>