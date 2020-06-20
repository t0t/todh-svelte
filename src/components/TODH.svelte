<script>
    export let uno, dos, tres, cuatro;
</script>

<style lang="scss">
    @import "../styles/main.scss";

    .T {
        border: 1px solid $primary;
        border-radius: 50%;
        width: 20.1em;
        height: 20.1em;
        display: grid;
        grid-template-areas: 
        "uno dos tre cua"
        ;
        background-color: $primary;
        margin-left: auto;
        margin-right: auto;
        align-items: center;
        justify-items: center;
        grid-template-columns: repeat(4, 1fr);
        @include media(s0) {
            @include type-setting(-1);
        }
        @include media(s1) {
            @include type-setting(0);
        }
        @include media(s2) {
            @include type-setting(1);
        }
        > div {
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
        .Uno {
            grid-area: uno;
            &:hover {
                grid-column: span 1 / -1;
            }
        }

        .Dos {
            grid-area: dos;
        }

        .Tres {
            grid-area: tre;
        }

        .Cuatro {
            grid-area: cua;
        }
    }
</style>

<div class="T">
    <div class="TUno">{uno}</div>
    <div class="TDos">{dos}</div>
    <div class="TTres">{tres}</div>
    <div class="TCuatro">{cuatro}</div>
</div>