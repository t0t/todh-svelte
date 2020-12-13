<script>
  import {
    fade
  } from 'svelte/transition';
  import PageTitle from "../components/PageTitle.svelte";
  import Content from "../components/Content.svelte";
  import Banner from '../components/Banner.svelte';
  import MainFeatures from '../components/MainFeatures.svelte';
  // import Slider from '../components/slider/Slider.svelte';
  import Image from '../components/Image.svelte';
  import Button from "../components/Button.svelte";
  import CoverIntroCarousel from '../components/CoverIntroCarousel.svelte';
  import {
    metatags
  } from '@sveltech/routify';
  metatags.title = 'T-O-D-H';
  metatags['twitter:card'] = 'Visión holística y artefactos en torno a la Creación';
  import Tag from "../components/Tag.svelte";
  import GraphSvelteSVG from '../components/NetworkGraphSvelteSVG.svelte';
  import BlockQuote from '../components/BlockQuote.svelte';
  import ContentArea from '../components/ContentArea.svelte';
  import Area from '../components/Area.svelte';
  import Figure from '../components/Figure.svelte';
</script>

<style lang="scss">
  @import "../styles/main.scss";
  sub {
    color:springgreen;
    font-size: .5em;
    line-height: initial;
  }
  :global(body) {
    background-color: $dark_grey;
  }
  video {
    width: 100%;
    object-fit: cover;
  }
  .VideoContainer {
    position: relative;
    min-height: 33vh;
    .mask {
      width: 100%;
      height: 100%;
      background-color: $black;
      position: absolute;
      mix-blend-mode: color;
      opacity: .3;
    }
    .textoverlay {
      position: absolute;
      h1 {
        font-size: $h1;
        margin-left: $h1;
        @include media(s1) {
          margin-left: $h2;
        }
        @include media(s2) {
          font-size: $h3;
          margin-left: $h2;
        }
      }
    }

    video {
    }
  }
</style>

<svelte:head>
  <title>TODH</title>
</svelte:head>

<Content>

  <!-- <Slider></Slider> -->

  <div class="VideoContainer">
    <div class="textoverlay"><h1>+0+1234</h1></div>
    <div class="mask"></div>
    <video 
      poster="/img/cover2.jpg"
      playsinline
      controls="controls"
    >
      <source src="/img/desdelapoesiadelamateria.webm" type="video/webm" />
      <source src="/img/desdelapoesiadelamateria.mp4" type="video/mp4" />
      <p>Su navegador no soporta vídeos HTML5.</p>
    </video>
  </div>

  <Banner variante={1}>
    <Figure>
      <img src="/img/01234.svg" alt="imagen">
    </Figure>
    <h2>¿Percibes<sub>2</sub> ese orden<sub>1</sub> atravesándote<sub>0</sub> en la forma<sub>4</sub> del encuentro<sub>3</sub>? Es lo inefable conociéndose a través de la Creación. 01234 son las llaves de tus ojos. Éstas son las cosas que yo he visto, a donde me llevan las corrientes de todas las formas...</h2>
  </Banner>

  <Banner variante={2}>
    <div>
      <h2>Video-vaciamientos</h2>
      <p>Poco a poco voy nutriendo mi canal en Youtube, te invito a pasarte por allí y ver la información que voy volcando, reflexiones sobre TOT, la Función Toth, +0+1234, etc.</p>
      <Button variante={1} text="Ir al canal" url="https://www.youtube.com/channel/UC9C6HRn2RDG3bmWC4Soxtcw" />
    </div>

    <iframe title="Video sobre TOT" width="100%" height="350" src="https://www.youtube.com/embed/KAbnV6e8exs" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
  </Banner>

  <ContentArea>

    <Area title="+0+1234 es el código con el que leo la Creación.">
    
    <BlockQuote quote='"Quisiera que tú me entendieras a mí sin palabras. Sin palabras hablarte, lo mismo que se habla mi gente. Que tú me entendieras a mí sin palabras como entiendo yo al mar o a la brisa enredada en un álamo verde..."' author="José Hierro" variante={2} />

    <h5>Nada nuevo bajo el Sol. Introducción y referencias.</h5>

    <p>Si me preguntaran para qué he venido a este mundo diría que para recordar. En un sentido teleológico creo que esa es la función de porqué nacemos. Recordamos para recuperar el conocimiento que tenemos de nosotros mismos y de lo que Es.
    <p>El acto de recordar produce en mi una gran liberación y paz interior. Me "ordeno a mi mismo" el recordar... Y lo hago desde un sincretismo hermenéutico vivo a través del arte como simbolo.</p>
    <p>A riesgo de parecer pedante, y aún reconociendo mi torpeza con las palabras, no veo forma mas clara de decir con palabras cómo es aquello hacia lo que me ha llevado el recuerdo en esta vida.</p>

    <p>Del griego hermeneutikos; Hermeneuo (Yo descifro) y Tekné (Arte, técnica, tejer). La Hermenéutica nace como <strong>"el arte o la técnica de explicar, descifrar o interpretar"</strong>. Así que para explicar algo, luego veremos el qué, primeramente yo tengo que hacer una interpretación, un desciframiento de algo que viene cifrado, escrito, plasmado en alguna parte. Puede estar en los libros o en el legado sapiencial de algún maestro pero puede estar también en mi propio interior, como algo latente que busca manifestarse o ser visto.</p>

    <p>Al expresar y comunicar, desciframos siempre un algo "tejido" previamente, representándolo, volviendolo a hacer presente. Así, la hermenéutica es el Arte de descifrar pero también puede ser comprendido como "un arte que me descifra a mi mismo en el acto de descifrar".</p>
    
    <p>Es por eso que a medida que uno aumenta su sensibilidad perceptiva, interpretativa, intelectual o consciencial se va dando cuenta de las relaciones intrínsecas que hacen que en esencia todo sea lo mismo o provenga de un mismo origen arquetipal. Un mar de significados encapsulados o fractales, embebidos unos dentro de otros como muñecas rusas, generando estructuras complejas e inabarcables por todas partes pero extremadamente simples y obvias al mismo tiempo. A medida que una persona descifra, interpreta, percibe o lee va entendiendo, y se simplifica a él mismo a la vez que se expande una comprensión real de la cosa que nace en ese momento y que hace que las cosas se muestren como lo que son verdaderamente, vivencialmente. Los conceptos, las nociones, son meras partes de un sistema de significantes que comparten la misma raiz, esencia o significado.</p> 

    <p>Así que aviso que aunque este discursito se va a tornar enrebesado y enmarañado y de que se requiere un esfuerzo para comprender que va más allá de la forma.</p>

    <p>Veámos cómo es esto: la palabra Hermeneutiké también hace referencia al dios Griego Hermes, encargado de llevar mensajes secretos (herméticos) a través de distintos mundos y descifrarlos sólo a determinados destinatarios. Hermes era un psicopompo, un mismo mensajero alado que significaba al Mercurio de los romanos y, por supuesto, el mismo que el Toth de los egipcios, dios-símbolo de la mediación y de la interpretación entre distintos mundos o caras de una misma realidad. </p>
    
    <p>Esto revela la noción de sincretismo que es clave; y es que se puede percibir lo que hay de idéntico en lo diferente.</p>
    
    <p>Mis referencias por un lado son y reivinican las tradiciones herméticas inspiradoras de la alquimia, la geometría, o la aritmosofía como ese corpus de ciencias sagradas y saberes milenarios que están por encima de la ortodoxia y el empirismo cartesiano que solo se han dedicado a desprestigar, tapar, castrar y acotar el verdadero conocimiento. Abogo por una verdadera hermenéutica vital, real y originaria como punto de partida fiable.</p>


    <h5>Arte como Símbolo</h5>

    <p>La construcción de sistemas simbólicos parece ser la marca distintiva del ser humano, así como la interpretación de formas lingüísticas, imágenes artísticas, símbolos míticos o ritos religiosos... y esto se antepone a la inmediatez de sus reacciones ante los estímulos del medio, como si no pudiera ver o conocer nada sino a través de la interposición de este sistema simbólico. Señala el filósofo Cassirer que "es como si la realidad física retrocediera en la medida que avanza nuestra actividad simbólica". Y en efecto así es pero lo que parece alejarnos de la percepción real, inmediata de la realidad física no son los símbolos sino la idolatría del signo por el signo, que es algo muy distinto.</p>
    
    <p>Arte es símbolo y ambos son una mediación capaz de abrirle lo real a la conciencia.</p>

    <p>La obra de arte no es un mero portador de sentido y no sólo remite a algo, sino que en ella está propiamente aquello a lo que remite. Lo simbólico no sólo nos lleva al significado, sino que lo hace estar presente, representándolo.</p>

    <p>En toda obra de arte hay algo así como mimesis o imitatio, pero mimesis no se refiere a la imitación de algo previamente conocido, sino de llevar algo a su representación, de manera que esté presente ahí en su plenitud sensible. </p>
    
    <BlockQuote quote='"Toda interpretación que haya de acarrear comprensión tiene que haber comprendido ya lo que trate de interpretar."' author="Heidegger -- El ser y el tiempo" variante={2} />

    <p>En la representación de una obra de arte, no se trata de que ésta represente algo que ella no es, como hace una alegoría y por lo tanto no dice algo para que así se piense en otra cosa. Sólo en ella, y precisamente en ella puede encontrarse lo que tenga que decir.</p>

    <p>En la obra de arte como símbolo se produce es un reconocimiento mutuo entre dos polos de una misma realidad que se encuentran. La realidad se reune y se completa a sí misma haciendose presente como símbolo.</p>

    <p>No, el arte no es una imitación sino un descubrimiento de la realidad.</p>

    <p>Lo simbólico en el arte, además de remitirnos al significado, lo representa.</p>

    <p>La experiencia estética es incomparablemente más rica, está preñada de infinitas posibilidades que quedan sin realizar en la experiencia sensible ordinaria. En la obra del artista estas posibilidades se actualizan; salen a la luz y toman una forma definida.</p>
      
    <p>Como las tradiciones hermenéuticas se han encargado de explicar, las formas de desvelar la verdad son múltiples: analogías, metáforas, arquetipos y símbolos implican recorridos intertextuales para el ser humano que, a su vez, completa la interpretación en su propio horizonte de expectativas. En la conjunción, y no en la oposición, entre las tradiciones hermenéuticas y herméticas, será posible abrir nuevos espacios para la interpretación y representación de una realidad holistica, viva y real.</p>

    <hr>
    <h2>Hermenéutica arquetípica y simbólica de la Creación</h2>
    <p>Este código simbólico se basa en los 5 arjés universales y activa un tipo de visión y de comprensión que se vive como la experiencia misma del conocimiento.</p>
    <hr><br>
    <BlockQuote quote='"Dios es una esfera infinita cuyo centro se halla en todas partes y su circunferencia en ninguna"' author="Hermes Trismegisto - Libro de los 24 filósofos" variante={2} />
    <h4>0. Disolución y apertura del sentido</h4>
    <p>Cada Creación surge de un vacío infinito de posibilidades queriendo conocerse y experimentarse. (Y esto es así tanto si se trata de una obra artística como de cualquier otra cosa viva.) En el origen existe una nada que se contrae en el dar hasta el punto de autoexiliarse o esconderse de sí, de manera que puede caber en la existencia.</p>
    <p>Es significativo observar cómo el 0 va primero, en lo metafísico, está a la izquierda y "luego", en lo cosmológico se encuentra a la derecha del 1. Primero es el juego 01... (esencia) y luego se da el juego 10... (presencia). Todo lo que hay es un fractal infinito de 010...</p>
    <p>Paradoja 0-1; en geometría, un punto carece de dimensión pero si lo agrandamos se convierte en un circulo que contiene a su vez un punto central(1) y así sucesivamente. Un circulo con infinitud de puntos es en si mismo un solo punto. </p>

    <p>
      Como dice el Mario Sabán en un curso que imarte de Kabalah; Las lenguas más antiguas como el hebreo, por ejemplo, se escribían grabando en la piedra y para eso tenían que quitar tierra y generar un vacío en la piedra. Las letras podían leerse gracias al vacío de las letras. Lo que produce que la letra diga algo es el vacío de la letra, el vacío, pues, es el que nos habla.
    </p>
    
    
    <h4>1. El recipiente del ser</h4>
    <p>Unidad. Centro. Espíritu. Luz. Principio Solar. La respuesta que se disuelve en preguntas <sub>4</sub></p>
    <p>El 1, antes del 0 es el 10; la proyección hacia mundos nuevos en distintos ordenes de existencia. La Unidad en la manifestación es cuaternaria o cuatriunitaria. No existe más que Unidad, pero esa unidad se fragmenta o despliega en partes. La luz va siendo aminorada a través de recipientes o vasijas que la canalizan, la vehiculen y la relentizan para que niveles más densos de energía puedan soportarla. </p>
    <p>La inspiración es en dirección 01234. Hemos sincretizado, o refactorizado, la relación entre infinito (0) y finitud (1) en una secuencia que es simétrica: 01 (lo metafísico) y 10 (lo cosmológico). Quedaría así: 01-10 ó 010.</p>

    <p>De modo que 0 (infinitas posibles preguntas) causan 1 (respuesta finita) --- (entonces) --- 1 (la respuesta finita) 0 (causa infinitas nuevas preguntas).</p>
    <Image src="/img/01234.svg" variante="1" />

    <h4>2. Aguas menores de la fragmentación</h4>
    <p>Alma. Reshimó. Caída. Olvido de sí. Corrientes de formas</p>
    <p>2 y 3 cumplen una función dual, y en función de su dirección vehicularán las palabra como una invocación o como una evocación.</p>
    <p>Uno se reverbera a si mismo, se replica encapsulándose en un estallido de múltiples unos. Cada uno de esos múltiples unos es el dos, precisamente porque la Unidad no se puede multiplicar, sólo dividir.</p>

    <h4>3. Aguas mayores del encuentro</h4>
    <p>Símbolo.</p>
    <p>El dos implica una distancia entre unidades creando la ilusión de separación entre ellas, y esa distancia determina el 3. El 3 es el principio relacional y unificador del par 1-4. Tanto el 2 como el 3 son arquetipos mediadores. El dos separa para que el 3 reúna.</p>

    <h4>4. La coagulación sensible</h4>
    <p>Creatura. Las preguntas que se coagulan como respuesta.</p>
    <p>El 4 es la máxima densificación del 1. Cuando el 1 llega a su máxima envergadura. El cuatro es el límite que finalmente encierra y contiene el ser cristalizado. El cuatro es un tipo de completitud aparentemente autónoma de naturaleza opaca; esconde y oculta al ser precisamente desde lo que es. </p>
    
    <p>En el 4 se produce una segunda paradoja y es que siendo la dimensión más alejada también es la más íntimamente ligada al ser de las cosas. En lo que se muestra en el mundo visible es en donde más ocultamiento hay. O dicho de otro modo; la mayor parte de lo que hay no lo vemos, todo eso que percibimos a través de los sentidos es el 0,000000001% de lo que existe. La infinitud del 0 llega a su máximo ocultamiento en el 4. Recordemos que el 0 se va ocultando más y más hasta llegar al 4 que prácticamente es imperceptible. Cuanto más perceptible es la inexistencia más presente está. </p>
    
    </Area>

    <Banner variante={2}>
      <h2>“Y cuando el Todo hubo comenzado a ordenarse... todos los elementos recibieron del Creador sus figuras por la acción de las Ideas y de los Números...”<br>
        <small>(Platón, Timeo, 360 aC)</small></h2>
      <Figure caption="0 + 1 + 2 + 3 + 4 = 10 = 1 + 0 = 1">
        <img src="/img/grafico-1.svg" alt="imagen">
      </Figure>
    </Banner>

  </ContentArea>
  
  <MainFeatures></MainFeatures>

</Content>