<script>
  import {
    onMount
  } from 'svelte';

  import PageTitle from '../components/PageTitle.svelte';
  import TODH from '../components/TODH.svelte';
  import BlockQuote from '../components/BlockQuote.svelte';
  import Content from '../components/Content.svelte';
  import ContentArea from '../components/ContentArea.svelte';
  import Area from '../components/Area.svelte';
  import Banner from '../components/Banner.svelte';
  import List from '../components/List.svelte';
  import Cards from '../components/Cards.svelte';
  import Card from '../components/Card.svelte';
  import Figure from '../components/Figure.svelte';
  import IconCero from '../components/icons/IconCero.svelte';
  import IconUno from '../components/icons/IconUno.svelte';
  import IconDos from '../components/icons/IconDos.svelte';
  import IconTres from '../components/icons/IconTres.svelte';
  import IconCuatro from '../components/icons/IconCuatro.svelte';
  import IconEspiral from '../components/icons/IconEspiral.svelte';
  import IconTetractys from '../components/icons/IconTetractys.svelte';
  import Loading from '../components/Loading.svelte';
  import Libros from '../components/Libros.svelte';
  import Conceptos from '../components/Conceptos.svelte';

  let visible = true;

  import {
    todh,
    counterStore
  } from "../store/todh.js";

  let incrementCounter = () => {
    if ($counterStore < 7) {
      $counterStore++;
    } else {
      $counterStore = 0;
    }
  };
</script>

<style lang="scss">
  @import "../styles/main.scss";
</style>

<svelte:head>
  <title>TODH | About</title>
</svelte:head>

<PageTitle pageTitle="El proceso de la Creación" pageSubTitle="Matriz-modelo-prototipo base de cualquier cosa." />

<Content>
  <ContentArea>
    
    <Area>
      <TODH on:click={incrementCounter} cero={$todh[0].tags[$counterStore]} uno={$todh[1].tags[$counterStore]} dos={$todh[2].tags[$counterStore]} tres={$todh[3].tags[$counterStore]} cuatro={$todh[4].tags[$counterStore]} />
    </Area>

    <Banner>
      <figure slot="image">
        <IconEspiral />
      </figure>
      <BlockQuote quote="La raíz profunda de la Creación es el orden y sentirlo nos reconecta con todo lo que existe."
        author="TODH" variante={1} />
    </Banner>

    <Area title="Tetractys">
    <div class="center">
      <Figure caption="0 + 1 + 2 + 3 + 4 = 10 = 1 + 0 = 1">
        <IconTetractys />
      </Figure>
    </div>
    </Area>

    <Area title="Una lógica de la observación">
    <p>
      La base de lo que es TODH, para mí queda sobradamente explicada
      contemplando la Tetractys, la vesica Piscis o el número-idea Pitagórico.
      Es un contemplar dejándose penetrar por lo que se observa. Un rendirse ante la evidencia. Es mirar hasta que ves,
      nada más. Es una escucha atenta. Todo lo que hay es agua, fuego, tierra, aire y un quinto elemento... No són sólo
      elementos naturales, son principios abstractos,
      hechos de una sustancia que se encuentra en nuestras ideas, nuestras
      formas de ser, hay fuego en las ideas, agua en las emociones, tierra en los hechos, y aire en nuestros discursos.
      <strong>
        Antes es la espiral que el caracol. El caracol es la expresión de un principio anterior.
      </strong>
      Conforme vas cayendo en lo que la esencia de las cosas es, te van
      importando cada vez menos las formas y más las relaciones. Mi ánimo es el de transmitir esta vivencia profunda y
      no tanto perseguir una base teórica intelectual. Mucho se ha escrito ya por gente de talla muy superior a la mía,
      de modo que me parecería absurdo tratar de llenar más páginas al respecto.
    </p>
    <BlockQuote quote="Un viaje que es de regreso a la Unidad." author="TODH" variante={1} />
    <p>
      Recalcar la naturaleza sintética de este proyecto que apunta siempre al origen, a lo original, a lo obvio. Un
      viaje que es de regreso a la Unidad.
      Una incursión. El símbolo tiene ese poder, condensa un vasto campo de significados y los disuelve quedándose con
      lo esencial.
    </p>
    <p>
      Me gusta comparar TODH con el juego del Tetris cuyo objetivo es desintegrar los objetos que van cayendo. El
      jugador no añade más cosas al escenario, simplemente reconoce unas formas que aparecen sobre un fondo y comprende
      cual es su orden. Nada más. Los objetos aparecen y desaparecen por sí mismos, tú no los creas, sólo los ves y
      reconoces cual es su sitio.
      No inventas nada, no añades nada. TODH es simplemente orden "elemental".
    </p>
    </Area>

    <Area title="Términos clave">
    <Conceptos />
    </Area>

    <Area title="Libros">
    <Libros />
    </Area>

    <Banner variante={1}>
      <img src="img/dos.svg" alt="Alt text">
      <BlockQuote variante={2} quote="La creatividad es un proceso universal" author="Jaime Buhigas" />
    </Banner>

  </ContentArea>
</Content>