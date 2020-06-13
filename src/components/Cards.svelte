<style lang="scss">
    @import "../styles/main.scss";
    .Cards {
        display: grid;
        gap: $h0;
        @include media(s2) {
            grid-template-columns: repeat(auto-fill, minmax($h6, 1fr));
            grid-auto-rows: auto;
            grid-auto-flow: row;
            gap: $h2;
        }
        @include media(s3) {
            grid-template-columns: repeat(auto-fill, minmax($h7, 1fr));
            gap: $h3;
        }
        @include media(s3) {
            grid-template-columns: repeat(auto-fill, minmax($h8, 1fr));
            gap: $h4;
        }
    }
</style>

<div class="Cards">
    <slot/>
</div>