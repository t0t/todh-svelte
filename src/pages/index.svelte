<script>
  import { fade } from 'svelte/transition';
  import PageTitle from "../components/PageTitle.svelte";
  import Content from "../components/Content.svelte";
  import ContentArea from "../components/ContentArea.svelte";
  import Area from "../components/Area.svelte";
  import Banner from '../components/Banner.svelte';
  import BlockQuote from "../components/BlockQuote.svelte";
  import IconTres from '../components/icons/IconTres.svelte';
  import MainFeatures from '../components/MainFeatures.svelte';
  import CoverIntroCarousel from '../components/CoverIntroCarousel.svelte';
  import IconEspiral from '../components/icons/IconEspiral.svelte';
  import { metatags } from '@sveltech/routify';
  metatags.title = 'T-O-D-H';
  metatags['twitter:card'] = 'Visión holística y artefactos en torno a la Creación';

  import GraphSvelteSVG from '../components/NetworkGraphSvelteSVG.svelte';

  // import Graph from '../components/NetworkGraphCanvas.svelte';
	// import data from '../data/data.js';
  // import data from '../store/dataviz.js';
  // import { hierarchy } from 'd3-hierarchy';
  // import Dviz from '../components/Dviz.svelte';
  // import DvizDos from '../components/DvizDos.svelte';
  import DvizTres from '../components/DvizTres.svelte';
  import DvizCuatro from '../components/DvizCuatro.svelte';
  import DvizCinco from '../components/DvizCinco.svelte';

</script>
  
<style lang="scss">
  @import "../styles/main.scss";
</style>
  
<svelte:head>
  <title>TODH</title>
</svelte:head>

<Content>
  <Banner>
    <DvizCinco/>
    <div>
      <h1>T-O-D-H</h1>
    <h2>Sólo me interesa una cosa: TODO</h2>
    <p>3d Printed art, holistic maps, front-end prototyping and all that shit</p>
    </div>
  </Banner>
  <Banner variante={2}>
    <BlockQuote quote="Data visualization, mental maps, front-end prototyping" author="TODH" />
    <DvizCuatro/>
  </Banner>
  <Banner>
    <BlockQuote quote="Sentir el orden forma la conexión" author="TODH" />
    <DvizTres/>
  </Banner>

  
  <MainFeatures></MainFeatures>
  
    <Area>
      <p>Separate and Join Together (or dissolve and coagulate in Latin), is a medieval #alchemy quote, which is to say that nothing new can be built if not before we make space, breaking the old.</p>
      <BlockQuote variante={2} quote="The path isn't a straight line, its a spiral. You continually come back to things you thought you understood and see deeper truths." author="Barry H. Gillespie" />

      <BlockQuote variante={2} quote="La distancia entre Dios y tú es tan corta que no cabe un camino." author="Wei Wu Wei (Terence Gray)" />
      
      <BlockQuote variante={2} quote="Nada sé de caminos; pero conozco la maquinaria del universo. Esto es todo. La aprehendí con mi alma, la alcancé por la simple fuerza de la intuición." author="E. A. Poe, Eureka" />
    </Area>
  
  <ContentArea>
    <Banner>
      <BlockQuote quote="Todo tiende a ser lo que viene siendo." author="TODH" />
      <IconEspiral />
    </Banner>

  </ContentArea>
</Content>