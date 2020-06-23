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
            grid-template-areas:
            "a a"
            "b b"
            "c c"
            ;
        }
        
        @include media(s2) {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            /* grid-auto-flow: row;
            grid-auto-rows: auto; */
            grid-template-areas:
            "a a c c"
            "b b b b"
            ;
            padding: $h4;
            gap: $h4;
        }
        @include media(s3) {
            grid-template-areas:
                "a b c"
            ;
            /* background-color: lime; */
        }

        >div {
            background-color: $color_3;
            
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
    .MainFeature__caption {
        padding-left: $h2;
        padding-right: $h2;
        padding-bottom: $h2;
    }
</style>
  
<div class="MainFeatures">
    <div>
        <a href="/products">
            <figure class="MainFeature">
                <img src="img/img1.jpg" alt="">
                <figcaption class="MainFeature__caption">
                    <h4>Coagulando la vibración</h4>
                    <p>TODH traído a la materia como objeto de contemplación. Obra plástica e impresiones 3D</p>
                    <small>Learn more ></small>
                </figcaption>
            </figure>
        </a>
    </div>
    <div>
        <a href="/styleguide">
            <figure class="MainFeature">
            <CodeBlock header={false} language="javascript" code="{code_javascript}"/>
                <figcaption class="MainFeature__caption">
                    <h4>Hello Cosmos!</h4>
            <p>TODH en el diseño Frontend y mi workflow de creación digital ideal.</p>
            <small>Learn more ></small>
                </figcaption>
            </figure>
        </a>
    </div>
    <div>
        <a href="/blog">
            <figure class="MainFeature">
                <img src="img/grafico-6.svg" alt="">
            <figcaption class="MainFeature__caption">
                <h4>Sentir-Orden-Forma-Conexión</h4>
            <p>Laboratorio de experiencias y bitácora de reflexiones en torno al proceso de la Creación desde la Sabiduría Primigenia.</p>
            <small>Learn more ></small>
            </figcaption>
            </figure>
        </a>
    </div>
</div>