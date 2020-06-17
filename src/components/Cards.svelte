<style lang="scss">
    @import "../styles/main.scss";
    .Cards {
        display: grid;
        gap: $h0;
        padding: $h0;
        @include media(s1) {
            gap: $h1;
            padding: $h1;
            grid-template-columns: repeat(auto-fill, minmax($h6, 1fr));
        }
        @include media(s2) {
            grid-template-columns: repeat(auto-fill, minmax($h7, 1fr));
            grid-auto-rows: auto;
            grid-auto-flow: row;
            gap: $h4;
            padding: $h4;
        }
    }
</style>

<div class="Cards">
    <slot/>
</div>