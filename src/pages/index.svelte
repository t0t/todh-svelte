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
  import DvizTres from '../components/DvizTres.svelte';
  import DvizCuatro from '../components/DvizCuatro.svelte';

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

  <Banner variante={2}>
    <h2>Videocápsulas en torno al proceso de la Creación</h2>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/KAbnV6e8exs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/HFUOY7i4W8k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/SRiftbEqnKs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/Kqc9iJTMWHE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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