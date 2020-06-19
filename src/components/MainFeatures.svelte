<script>
    import IconCuatro from "./icons/IconCuatro.svelte";
let code_javascript = 
`let message = "Cosmos";
.helloCosmos {
    background-color: black;
}
<p class="helloCosmos">
    Hello { message }!
</p>`;
    import CodeBlock from "./CodeBlock.svelte";

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
            @include media(s0) {
                margin-bottom: $h1;
                &:last-child {
                    margin-bottom: 0;
                }
            }

            img,
            pre {
                margin-bottom: $h2;
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
            <h4>Coagulando la vibración</h4>
            <p>TODH traído a la materia como objeto de contemplación. Obra plástica e impresiones 3D</p>
            <small>Learn more ></small>
        </a>
    </div>
    <div>
        <a href="/styleguide">
            <CodeBlock header={false} language="javascript" code="{code_javascript}"/>
            <h4>Hello Cosmos</h4>
            <p>TODH en el diseño Frontend y mi workflow de creación digital ideal.</p>
            <small>Learn more ></small>
        </a>
    </div>
    <div>
        <a href="/blog">
            <img src="img/grafico-6.svg" alt="">
            <h4>Sentir-Orden-Forma-Conexión</h4>
            <p>Laboratorio de experiencias y bitácora de reflexiones en torno al proceso de la Creación desde la Sabiduría Primigenia.</p>
            <small>Learn more ></small>
        </a>
    </div>
</div>