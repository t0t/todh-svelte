<script>
    // import Cards from "../components/Cards.svelte";
    // import Card from "../components/Card.svelte";
    import IconCuatro from "./icons/IconCuatro.svelte";
    // export let href = "";
</script>

<style lang="scss">
    @import "../styles/main.scss";

    .MainFeatures {
        padding: $h4;
        width: 100%;
        /* height: 100vh; */
        /* background-repeat: no-repeat;
        background-size: cover; */

        a:hover small {
            text-decoration: underline;
        }

        @include media(s1) {
            display: grid;
            /* grid-template-columns: repeat(auto-fill, minmax($h6, 1fr)); */
            grid-template-columns: repeat(3, 1fr);
            /* grid-auto-flow: row;
            grid-auto-rows: auto; */
            gap: $h4;
            grid-template-areas:
                "a b c"
            ;
        }

        @include media(s2) {}

        >div {
            background-color: $color_3;
            display: flex;
            align-items: center;
            justify-content: center;
            /* text-align: center; */
            padding: $h2;
            /* width: $h7;
            height: $h7; */
            border: 1px solid $grey;
            /* border-radius: 50%; */

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
            <h4>Discernimiento</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <small>Learn more ></small>
        </a>
    </div>
    <div>
        <a href="/styleguide">
            <h4>Discernimiento</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <small>Learn more ></small>
        </a>
    </div>
    <div>
        <a href="/styleguide">
            <h4>Discernimiento</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <small>Learn more ></small>
        </a>
    </div>

</div>