<script>
    // import Cards from "../components/Cards.svelte";
    // import Card from "../components/Card.svelte";
    import IconCuatro from "./icons/IconCuatro.svelte";
    // export let href = "";
</script>

<style lang="scss">
    @import "../styles/main.scss";

    .MainFeatures {
        padding: $h1;
        
        a:hover small {
            text-decoration: underline;
        }
        
        /* @include media(s0) {
            background-color: red;
        } */
        @include media(s1) {
            padding: $h2;
            gap: $h2;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-auto-flow: auto;
            grid-auto-rows: auto;
            grid-template-areas:
                "a a a"
                "b b b"
                "c c c"
            ;
        }

        @include media(s2) {
            grid-template-areas:
                "a c c"
                "b c c"
            ;
        }
        @include media(s3) {
            grid-template-areas:
                "a b c"
            ;
        }

        >div {
            background-color: $color_3;
            display: flex;
            align-items: flex-start;
            padding: $h2;
            border: 1px solid $grey;
            @include media(s0) {
                margin-bottom: $h1;
                &:last-child {
                    margin-bottom: 0;
                }
            }

            @include media(s3) {
                padding: $h4;
            }

            &:nth-child(1) {
                grid-area: a;
            }
            &:nth-child(2) {
                grid-area: b;
            }
            &:nth-child(3) {
                grid-area: c;
            }
            
        }
    }
</style>

<div class="MainFeatures">
    <!-- <div><IconCuatro/></div> -->

    <div>
        <a href="/styleguide">
            <h4>Arte</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <small>Learn more ></small>
        </a>
    </div>
    <div>
        <a href="/styleguide">
            <h4>Diseño de interfaces</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <small>Learn more ></small>
        </a>
    </div>
    <div>
        <a href="/styleguide">
            <h4>Pensamento holístico</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <small>Learn more ></small>
        </a>
    </div>

</div>