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
                <img src="img/grafico-nueve.jpg" alt="">
                <figcaption class="MainFeature__caption">
                    <p>Toda finitud surge de un autovaciamiento del infinito, la letra surge de "vaciar la materia" y la visión surge de un espacio vacío comunicante revelador de haces de luz... El secreto es secreto precisamente por lo evidente que es.</p>
                </figcaption>
            </figure>
        </a>
    </div>
    <div>
        <figure class="MainFeature">
            <img src="img/grafico-siete.jpg" alt="">
            <figcaption class="MainFeature__caption">
                <p>Showroom en Mediona, Barcelona. Encantado de recibirte si te apetece visitar mi estudio y ver las piezas al natural.</p>
                <small>M. 619549032</small>
            </figcaption>
        </figure>
    </div>
    <div>
        <figure class="MainFeature">
            <img src="img/grafico-ocho.jpg" alt="">
            <figcaption class="MainFeature__caption">
                <p>Experimento con impresión 3D en gran formato y postproducción con resinas, arenas y óxidos.</p>
            </figcaption>
        </figure>
    </div>
    
   
</div>