<script>
  import {
    fade
  } from 'svelte/transition';
  import PageTitle from "../components/PageTitle.svelte";
  import Content from "../components/Content.svelte";
  import Banner from '../components/Banner.svelte';
  import MainFeatures from '../components/MainFeatures.svelte';
  import Slider from '../components/slider/Slider.svelte';
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
</style>

<svelte:head>
  <title>TODH</title>
</svelte:head>

<Content>

  <Slider></Slider>

  <Banner variante={1}>
    <Figure variante={1}>
      <img src="/img/grafico-3.jpg" alt="imagen">
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

    <Area title="Acerca de mi obra">
    
    <BlockQuote quote='"Quisiera que tú me entendieras a mí sin palabras.
    Sin palabras hablarte, lo mismo que se habla mi gente.
    Que tú me entendieras a mí sin palabras
    como entiendo yo al mar o a la brisa enredada en un álamo verde..."' author="José Hierro" variante={2} />

    <p>Lo que hago son <i>creaturas</i> tridimensionales de corte naturalista que invitan a una contemplación desnuda y cruda, sin artificios, con un fuerte componente emocional que uno va descubriendo a medida que alcanza cierta intimidad. Se deja espacio para el descubrimiento sutil de cada detalle a través de una luz viva que revelará u ocultará en función de la posición del espectador y de la perspectiva de su mirada.</p>

    <Image src="/img/grafico-1.jpg" variante="1" />
      
    <p>Es el observador quien genera aquello que encuentra, y a veces se produce un diálogo que puede ser tan mudo como ensordecedor, tan preciosista como contundente y que evoca desde una resonancia cognitiva los sabores más secretos. Estas piezas son pura contención introspectiva que busca expresar o dilucidar a corazón descubierto la verdad.</p>
    
    <BlockQuote quote='"Eres un universo de universos y tu alma una fuente de canciones..."' author="Rubén Darío" variante={2} />

    <p>A medida que uno entra en la obra afloran a la superficie texturas sutiles que se modulan con delicada aspereza. La arena, reinando con su indiscutible plasticidad, coagula el agua y con gestos sencillos va plasmando una homogénea continuidad vibracional. Las ondas reconcilian el movimiento con la quietud y acaso congelan las ideas en forma de símbolos tan frescos como eternos, simbolos cristalizados que podemos tocar como una impronta que deja el alma.</p>
    
    <Image src="/img/grafico-2.jpg" variante="2" />

    <p>Mi arte pretende topografíar el patrón arquetípico de la tretractys pitagórica que se repite en la esencia de todas las cosas, revelando lo metafisico desde lo cosmológico.</p>
    
    <BlockQuote quote='"Aquel que ha sentido una vez en sus manos temblar la alegría no podrá morir nunca...."' author="José hierro" variante={2} />

    <p>Pueden ser mandalas, pueden ser fotogramas tridimensionales, pueden ser el fruto de una meditación, o secuencias rítmicas, análogas a la propia naturaleza, o un algo que ocurre y escapa al lenguaje. Y son un algo tan inefable que se dice a sí mismo simplemente siendo.</p>
    
    <Image src="/img/grafico-diez.jpg" variante="1" />

    <p>Durante el tiempo que dura ese lugar sagrado que es un cuadro podemos encontrar ese principio solar siempre presente que rebrota de las formas y que vivifica la conexión con lo trascendente.</p>
    
    <p>Todo desemboca en los 5 elementos que son uno, por eso sólo existe una obra en la Creación, una obra en perpétuo movimiento; <p>Lo intangible<sub>0</sub> que se oculta a sí mismo para precisamente poder Ser<sub>1</sub> y luego se despliega en una suerte de "corrientes de formas"<sub>2,3</sub> que cristalizan en lo concreto<sub>4</sub>.</p>
    
    <p>Mis obras son una invitacion a experimentar ese movimiento eterno que me anima. Te invito, pues, a sentirte también tocado por ellas y a descubrir aquel misterio que gritan abiertamente desde la poesía de su materia.</p>

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