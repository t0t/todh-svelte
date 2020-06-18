<script>
  import {
    fade
  } from 'svelte/transition';
  import PageTitle from "../components/PageTitle.svelte";
  import Content from "../components/Content.svelte";
  import ContentArea from "../components/ContentArea.svelte";
  import Area from "../components/Area.svelte";
  import Banner from '../components/Banner.svelte';
  // import Loading from "../components/Loading.svelte";
  import BlockQuote from "../components/BlockQuote.svelte";
  import Cards from "../components/Cards.svelte";
  import Card from "../components/Card.svelte";
  import IconEspiral from "../components/icons/IconEspiral.svelte";
  import IconTres from '../components/icons/IconTres.svelte';
  import MainFeatures from '../components/MainFeatures.svelte';
  import CoverIntroCarousel from '../components/CoverIntroCarousel.svelte';

  import { metatags } from '@sveltech/routify'
  metatags.title = 'T-O-D-H'
  metatags['twitter:card'] = 'Visión holística y artefactos en torno a la Creación';
  </script>
  
  <style lang="scss">
    @import "../styles/main.scss";
  </style>
  
<svelte:head>
  <title>TODH</title>
  <script src="https://gist.github.com/t0t/791d882295d5530c4a7c9689e7ba73f9.js"></script>
</svelte:head>

<PageTitle pageTitle="T-O-D-H" pageSubTitle="Artefactos y procesos basados en la cosmovisión primigenia" />

<Content>
  <ContentArea>
    <Area>
      <CoverIntroCarousel/>
    </Area>

    <MainFeatures></MainFeatures>

    <Area>
      <script src="https://gist.github.com/t0t/791d882295d5530c4a7c9689e7ba73f9.js"></script>
    </Area>
    <Area>
    <p>Separate and Join Together (or dissolve and coagulate in Latin), is a medieval #alchemy quote, which is to say that nothing new can be built if not before we make space, breaking the old.</p>
    <BlockQuote variante={2} quote="Nada sé de caminos; pero conozco la maquinaria del universo. Esto es todo. La aprehendí con mi alma, la alcancé por la simple fuerza de la intuición." author="E. A. Poe, Eureka" />
    </Area>

    <Banner variante={1}>
      <IconTres />
      <BlockQuote variante={2} quote="En el universo hay cosas que son conocidas y hay cosas que son desconocidas y entre ellas hay puertas..." author="William Blake" />
    </Banner>

    <Banner>
      <BlockQuote quote="Todo tiende a ser lo que viene siendo." author="TODH" />
      <IconEspiral />
    </Banner>

  </ContentArea>

</Content>