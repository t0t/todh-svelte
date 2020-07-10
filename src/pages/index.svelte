<script>
  import { fade } from 'svelte/transition';
  import PageTitle from "../components/PageTitle.svelte";
  import Content from "../components/Content.svelte";
  // import ContentArea from "../components/ContentArea.svelte";
  // import Area from "../components/Area.svelte";
  import Banner from '../components/Banner.svelte';
  // import BlockQuote from "../components/BlockQuote.svelte";
  // import IconTres from '../components/icons/IconTres.svelte';
  import MainFeatures from '../components/MainFeatures.svelte';
  import CoverIntroCarousel from '../components/CoverIntroCarousel.svelte';
  // import IconEspiral from '../components/icons/IconEspiral.svelte';
  import { metatags } from '@sveltech/routify';
  metatags.title = 'T-O-D-H';
  metatags['twitter:card'] = 'Visión holística y artefactos en torno a la Creación';
  import Tag from "../components/Tag.svelte";

  import GraphSvelteSVG from '../components/NetworkGraphSvelteSVG.svelte';

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
  <Banner variante={0}>
    <DvizCinco/>
    <h1 class="text-big"><strong>3D Prints & Hi-Res Web Prototypes</strong> (from a holistic worldview)</h1>
  </Banner>
  <Banner variante={1}>
    <h2>Existe un <strong>orden universal</strong> que estructura cualquier proceso creativo. Los pensamientos se convierten en cosas y las cosas actualizan pensamientos... Sentir ese orden da forma a la conexión.</h2>
    <DvizCuatro/>
  </Banner>
  <Banner variante={2}>
    <DvizTres/>
    <div>
      <h2><strong>Todo está conectado</strong>, desde lo micro hasta lo macro.</h2>
      <Tag tag="#designSystems" />
      <Tag tag="#MejoraContínua" />
      <Tag tag="#storyTelling" />
      <Tag tag="#cosmogénesis" />
      <Tag tag="#atomicDesign" />
      <Tag tag="#geometría" />
      <Tag tag="#simbología" />
      <Tag tag="#astrología" />
      <Tag tag="#mentalMaps" />
      <Tag tag="#namingConventions" />
      <Tag tag="..." />
    </div>
  </Banner>

  <MainFeatures></MainFeatures>
  
</Content>