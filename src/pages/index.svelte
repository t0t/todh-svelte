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
    <Figure>
      <img src="/img/grafico-3.jpg" alt="imagen">
    </Figure>
    <h2>Cuando estoy creando siento un tipo de orden que me da paz y se forma a través de mí una conexión con lo que la Creación Es.</h2>
  </Banner>

  <Banner variante={2}>
    <div>
      <h2>Videocápsulas</h2>
      <p>Poco a poco voy nutriendo mi propio canal en Youtube, te invito a pasarte por allí y escuchar la información
        que voy volcando, reflexiones sobre TOT, TODH, la Función Toth, +0+1234</p>
      <Button variante={1} text="Ir al canal" url="https://www.youtube.com/channel/UC9C6HRn2RDG3bmWC4Soxtcw" />
    </div>

    <iframe width="100%" height="350" src="https://www.youtube.com/embed/KAbnV6e8exs" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
  </Banner>

  <ContentArea>

    <Area title="Notas sobre mi obra">

    <p><strong>En su vertiente conceptual podríamos decir que las cosas que hago pueden ser comprendidas racionalmente desde una perspectiva metafísica, simbólica, pitagórica, aritmosófica, cosmogónica o alquímica. </strong></p>

    <p>...pero son eminentemente vivenciales, así que me gustaría empezar explicando que estas cosas son artefactos cuya geometrías son concebidas y modeladas desde lo virtual; construyo una serie de mallas o estructuras poliédricas sobre las que aplico una serie de fuerzas y vibraciones que interactúan entre sí. La obra nace en mi cabeza y en el ordenador y luego es plasmada con una impresora 3D de gran formato. Después es cuando las pinto, entran en una fase de postproducción o acabados en los que aplico diferentes materiales como arenas, resinas, óxidos, etc. </p>

    <Image src="/img/grafico-1.jpg" variante="1" />

    <p>Son cuadros tridimensionales de corte naturalista que invitan a una contemplación desnuda y cruda, sin
      artificios, con una fuerte componente emocional que uno va descubriendo ya que permiten una mirada más íntima a
      medida que uno va penetrando. Se deja espacio a un nuevo descubrimiento sutil en cada detalle, en los reflejos que
      emanan, en el modo en que incide la luz, en las resonancias cognitivas que evocan... Hay una búsqueda de un
      preciosismo delicado y a la vez contundente, una contención introspectiva que es a corazón descubierto, donde se
      puede dilucidar una emocionalidad que no busca ser más de lo que Es.</p>

      <BlockQuote quote='"Eres un universo de universos y tu alma una fuente de canciones."' author="Rubén Darío" variante={2} />

    <p>Afloran a la superficie texturas sutiles, moduladas con delicada aspereza. La arena, reina, con su indiscutible plasticidad, la tierra que el cuadro es y se comporta como el agua y como el aire. Con gestos sencillos permite construir algo elaborado, desde una continuidad vibracional que irradia equilibrio. Las ondas reconcilian el movimiento con la quietud y congelan las ideas y las emociones en forma de simbolos que podemos tocar con el alma.</p>

    <Image src="/img/grafico-2.jpg" variante="1" />
    <p>Asomarme a la geometría pitagórica, el relato mitológico o herramientas como la kabbalah, o la astrología, por
      ejemplo, me sirve en lo personal para corroborar una y otra vez que la naturaleza de la existencia y su despliegue
      no son casuales sino que siguen una serie de patrones arquetípicos, un orden matricial que es universal.
      Digamos que ese orden es el marco conceptual desde el que yo opero y del que no me interesa alejarme. Persigo una suerte de sincretismo holistico del conocimiento más secreto y velado, como algo que me disuelve y me destila
      constantemente, subterráneamente. Digamos que aprender y estudiar me sirve para tener herramientas de síntesis que me vacíen, me liberen y me enfoquen en lo que es esencial para mí.</p>

    <p>Es vital en el proceso creativo poder equilibrar coherentemente lo "de arriba con lo de abajo", el cielo con la tierra, el círculo con el cuadrado, lo intangible con lo concreto. Pero no desde la oposición sino desde la experiencia de lo Uno atravesando a lo Otro, siendo la misma cosa, en un mismo proceso indisoluble y eterno.</p>


    <p>Así podemos encontrar ese orden que rebota en las formas y que revivifica la conexión con lo trascendente en
      varios de sus niveles de realidad al mismo tiempo.</p>

    <p>Tanto los seres como las cosas somos habitados, constituidos y atravesados por algo intangible que
      permanentemente se nos da. Lo intangible (0) se oculta a sí mismo para precisamente poder Ser (1) y luego se
      despliega en una suerte de "corrientes de formas" (2,3) que cristalizan en lo concreto (4). Cada cuadro expresa mi experiencia de esa totalidad.</p>

      <Image src="/img/grafico-diez.jpg" variante="1" />


    <p>Digamos que lo invisible se manifiesta gracias a la misma concretud de las formas, de las rocas, del agua, la
      naturaleza, el ser humano o el cosmos mismo. Y éste es un recorrido cíclico y tiende a completarse y todo lo que puede hacer uno es darse cuenta y compartirlo. Así que te invito a experimentar ese movimiento eterno de la
      Creación, o por lo menos alguna de sus versiones porque la existencia se instancia y se auto-replica a si misma
      constantemente.</p>

    <p>Te invito a sentirte tocado por estos artefactos y a descubrir las distintas maneras de relacionarte con lo
      invisible.</p>

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