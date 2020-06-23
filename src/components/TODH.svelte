<script>
    export let cero, uno, dos, tres, cuatro = "default";
</script>

<style lang="scss">
    @import "../styles/main.scss";

    .T {
        user-select: none;
        border: 1px solid $tertiary;
        border-radius: 50%;
        width: 20.1em;
        height: 20.1em;
        display: grid;
        position: relative;
        grid-template-areas:
            "uno dos tre cua"
        ;
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

        div {
            border-radius: 50%;
            border: 1px solid $tertiary;
            width: 5em;
            height: 5em;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: lighter;

            &:hover {
                /* color: inherit; */
                background-color: $black_light;
            }
        }

        &Cero {
            position: absolute;
            top: 0;
            width: 100%;
            text-align: center;
            color: $color_cero;
        }

        &Uno {
            grid-area: uno;
            color: $color_uno;
        }
        
        &Dos {
            color: $color_dos;
            grid-area: dos;
        }
        
        &Tres {
            color: $color_tres;
            grid-area: tre;
        }
        
        &Cuatro {
            color: $color_cuatro;
            grid-area: cua;
        }
    }
</style>

<div class="T" on:click>
    <div class="TCero">{cero}</div>
    <div class="TUno">{uno}</div>
    <div class="TDos">{dos}</div>
    <div class="TTres">{tres}</div>
    <div class="TCuatro">{cuatro}</div>
</div>