<script>
    // import Cards from "../components/Cards.svelte";
    // import Card from "../components/Card.svelte";
    import IconCuatro from "./icons/IconCuatro.svelte";
    // export let href = "";
</script>

<style lang="scss">
    @import "../styles/main.scss";
    .bg-image {
        position: absolute;
        z-index: -1;
        object-fit: cover;
    }
    .MainFeatures {
        position: relative;
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
                "a b c"
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
            /* padding: $h2; */
            /* border: 1px solid $grey; */
            @include media(s0) {
                margin-bottom: $h1;
                &:last-child {
                    margin-bottom: 0;
                }
            }

            img {
                margin-bottom: $h2;
            }

            @include media(s3) {
                /* padding: $h4; */
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
    <div>
        <a href="/products">
            <img src="img/img1.jpg" alt="">
            <h4>Artefactos</h4>
            <p>Obra plástica e impresión 3D</p>
            <small>Learn more ></small>
            </a>
    </div>
    <div>
        <a href="/styleguide">
            <img src="img/front.png" alt="">
            <h4>Diseñador gráfico especializado en UI y web layout</h4>
            <p>Diseño front-end de batalla. Browser prototyping. I love: System Design, CSS grid layout, Sass mixins, Svelte...</p>
            <small>Learn more ></small>
        </a>
    </div>
    <div>
        <a href="/blog">
            <img src="img/grafico-6.svg" alt="">
            <h4>Pensamento holístico</h4>
            <p>Cuaderno de bitácora de mi filosofía TODH</p>
            <small>Learn more ></small>
        </a>
    </div>

</div>