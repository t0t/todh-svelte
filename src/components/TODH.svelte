<script>
    export let cero, uno, dos, tres, cuatro = "default";
</script>

<style lang="scss">
    @import "../styles/main.scss";

    .T {
        user-select: none;
        border: 1px solid $primary;
        border-radius: 50%;
        width: 20.1em;
        height: 20.1em;
        display: grid;
        position: relative;
        grid-template-areas:
            "uno dos tre cua"
        ;
        background-color: $primary;
        margin-left: auto;
        margin-right: auto;
        align-items: center;
        justify-items: center;
        grid-template-columns: 1fr 1fr 1fr 1fr;

        @include media(s0) {
            @include type-setting(-1);
        }

        @include media(s1) {
            @include type-setting(0);
        }

        @include media(s2) {
            @include type-setting(1);
        }

        >div {

            border-radius: 50%;
            border: 1px solid $site_background;
            color: $site_background;
            width: 5em;
            height: 5em;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: $primary;

            &:hover {
                color: inherit;
                background-color: $site_background;
            }
        }

        &Cero {
            position: absolute;
            top: 15%;
            width: 100%;
            text-align: center;
            grid-area: cer;
            color: white;
        }

        &Uno {
            grid-area: uno;
            color: red;
        }

        &Dos {
            grid-area: dos;
        }

        &Tres {
            grid-area: tre;
        }

        &Cuatro {
            grid-area: cua;
        }
    }
</style>

<div class="T" on:click>
    <p class="TCero">{cero}</p>
    <div class="TUno">{uno}</div>
    <div class="TDos">{dos}</div>
    <div class="TTres">{tres}</div>
    <div class="TCuatro">{cuatro}</div>
</div>