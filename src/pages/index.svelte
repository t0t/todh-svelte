<script>
  import { fade } from 'svelte/transition';
  import PageTitle from "../components/PageTitle.svelte";
  import Content from "../components/Content.svelte";
  import Banner from '../components/Banner.svelte';
  import MainFeatures from '../components/MainFeatures.svelte';
  import Slider from '../components/slider/Slider.svelte';
  import CoverIntroCarousel from '../components/CoverIntroCarousel.svelte';
  import { metatags } from '@sveltech/routify';
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

  <ContentArea>

    <Area title="Crear como lo hace la Creación">
    <p>
      El Arte manifiesta lo sagrado en el mundo, una suerte de "cosas invisibles" que no parecen ser "de aquí", porque no las vemos, pero que hacen que nuestra existencia tenga algún sentido. Es curioso que la mayor parte de lo que hay no lo vemos. Según la moderna física cuántica el 99,999...% de todo lo que hay es vacío y todo surge del Big Bang. También los relatos cosmogónicos ancestrales de la mayoría de los pueblos hablan de lo mismo; huevos cósmicos que eclosionan y de los que surge la materia y también aguas infinitas repletas de potencialidad y vacuidad generadora.
    </p>
    <p>
      Cuando nos remontamos al origen primigenio siempre llegamos a ese punto ulterior al cual lo que sea que ocurra está más allá de lo que podemos abarcar con nuestros 5 sentidos. Una dimensión de lo incognoscible, lo metafísico y, porqué no, del lenguaje poético, donde se gesta todo el relato símbólico que subyace, permea e imbrica nuestra cultura.
    </p>
    <p>
      A través del simbolo los hinduistas nos hablan de un Visnú en forma de tortuga en un "océano de leche primordial" del que emerge una montaña que, como un palo (a modo de Axis Mundi) se usa para batir las aguas y hace emerger distintos elementos. La Ogdóada Hermopolitana, en Egipto, narra a cuatro parejas de dioses llamadas "las almas de Thot" que personifican la esencia de ese caos líquido primigenio, mar de Nun o estado primordial del que también surge un montículo de tierra con un huevo cósmico dentro. En posiblemente el primer relato de que tengamos constancia, el Enuma Elish mesopotámico, Apsu (océano) y Tiámat (mar) entremezclan sus aguas y dan origen a los "fangosos", etc. Ni qué hablar de los griegos y su acuoso Kaos hecho de silencio, tinieblas y potencialidad vital... y Gea, diosa de la Tierra, Madre universal. Cabe citar también el Tzimtzum de la mística judía, ese autovaciado del infinito potencial sobre sí mismo que se vierte como luz en vasijas-recipiente hasta llegar a Maljut, el mundo físico. Ni siquiera los cabalistas son capaces de describir cómo es exactamente la infinitud pura (Ein Sof), pero ahí está, como ese ingrediente secreto que no puede faltar en la ecuación.
    </p>
    <p>Éstos son sólo algunos ejemplos que espero me hayan servido para señalar que <b>existen patrones arquetípicos universales operando en la Creación.</b> Durante siglos nuestra especie los ha percibido y estudiado desde unas Ciencias Sagradas que ahora son vistas como charlatanería y mera superstición, claro.</p>

    <BlockQuote quote='"Lo más importante en la vida es que lo más importante sea lo más importante"' author="Stephen Covey" variante={2} />

    <p>Mi sentir desde siempre ha sido la necesidad de recuperar la legítima función sagrada del Arte entendido siempre desde su dimensión más metafísica, verdadera y original. No me interesa pintar un bello torso femenino sujetando una manzana y titularlo Venus en el Edén, sino que lo que pinto tiene que ser la encarnación del arquetipo venusiano, tiene que ser el disfrute mismo sucediendo. Desde mi visión el arte en su núcleo encarna una función que tiene que ver con la base de la realidad misma y con cómo la existencia y la no-existencia se sueñan mutuamente, recíprocamente.</p>
    <p>Así como reza el viejo axioma hermético "como es arriba es abajo, como es adentro es afuera..."
      <b>Existe una íntima y clara relación entre el oficio de realizar obras de arte y el modo en que parece operar la Inteligencia Creadora Última.</b> (por pretencioso que esto suene, así es como lo siento).
    </p>
    <p>
      Y es que una obra de arte es ya un símbolo per sé, es meditación y es mediación, un objeto perceptible por los sentidos en un nivel que, a la vez, también deja espacio a la contemplación íntima y poética de lo sagrado, aquello que no podríamos percibir de ningún otro modo.
    </p>
    <p>
      Mis creaciones buscan expresarse a sí mismas desde eso que me expresó a mí cuando nací. Son partes de una Unidad,  réplicas de lo que las atraviesa, y que quiere conocerse una y otra vez en su propio lenguaje. La Creación se oculta a si misma en lo creado para dejar espacio a lo que está siendo.
    </p>
    <p>
      Vivimos un mundo laberíntico de espejos y reflejos, de corrientes de formas, de construcciones distorsionadas... En algún momento caímos como Ícaro, como Adán y Eva, como Faetón, y seguimos cayendo... Pero si consiguieramos recuperar aquella mirada ingénua y preclara de aquellos primeros hombres tan rudimentarios que veían vastos océanos de potencialidad y huevos prototipicos de los que emergían y se revelaban las cosas que no podían ver, tal vez todo tendría un sentido.
    </p>
    </Area>

  </ContentArea>

  <Banner variante={2}>
    <h2>Videocápsulas en torno al proceso de la Creación

      <p>constantemente descubriendo cosas que ya fueron descubiertas.</p>
    </h2>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/KAbnV6e8exs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/HFUOY7i4W8k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/SRiftbEqnKs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/Kqc9iJTMWHE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </Banner>
 
  <Banner variante={1}>
    <h2>“Y cuando el Todo hubo comenzado a ordenarse... todos los elementos recibieron del Creador sus figuras por la acción de las Ideas y de los Números...”<br>
      <small>(Platón, Timeo, 360 aC)</small></h2>
    <Figure caption="0 + 1 + 2 + 3 + 4 = 10 = 1 + 0 = 1">
      <img src="/img/grafico-seis.jpg" alt="imagen">
    </Figure>
  </Banner>

  <MainFeatures></MainFeatures>
  
</Content>