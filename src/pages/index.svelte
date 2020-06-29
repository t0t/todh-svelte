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
  <!-- <script src="https://d3js.org/d3.v5.min.js"></script> -->
</svelte:head>

<PageTitle pageTitle="TODH lab." pageSubTitle="Digital data visualizations and 3D printing from an archetypal worldview." />

<Content>

  <DvizCinco/>
  <!-- <DvizCuatro/>
  <DvizTres/> -->
  
  <MainFeatures></MainFeatures>
  
    <Area>
      <p>Separate and Join Together (or dissolve and coagulate in Latin), is a medieval #alchemy quote, which is to say that nothing new can be built if not before we make space, breaking the old.</p>
      <BlockQuote variante={2} quote="The path isn't a straight line, its a spiral. You continually come back to things you thought you understood and see deeper truths." author="Barry H. Gillespie" />

      <BlockQuote variante={2} quote="La distancia entre Dios y tú es tan corta que no cabe un camino." author="Wei Wu Wei (Terence Gray)" />
      
      <BlockQuote variante={2} quote="Nada sé de caminos; pero conozco la maquinaria del universo. Esto es todo. La aprehendí con mi alma, la alcancé por la simple fuerza de la intuición." author="E. A. Poe, Eureka" />
    </Area>

    <Banner variante={1}>
      <IconTres />
      <BlockQuote variante={2} quote="En el universo hay cosas que son conocidas y hay cosas que son desconocidas y entre ellas hay puertas..." author="William Blake" />
    </Banner>
  
  <ContentArea>
    <Banner>
      <BlockQuote quote="Todo tiende a ser lo que viene siendo." author="TODH" />
      <IconEspiral />
    </Banner>

  </ContentArea>
</Content>