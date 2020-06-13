<script>
  import {
    onMount
  } from 'svelte';
  import {
        url,
        isActive
    } from "@sveltech/routify";
  import {
    Swipe,
    SwipeItem
  } from "svelte-swipe";
  import Loading from '../../components/Loading.svelte';
  import PageTitle from "../../components/PageTitle.svelte";
  import Content from '../../components/Content.svelte';
  import ContentArea from '../../components/ContentArea.svelte';
  import Area from '../../components/Area.svelte';
  import Cards from '../../components/Cards.svelte';
  import Card from '../../components/Card.svelte';
  import Banner from '../../components/Banner.svelte';
  import BlockQuote from "../../components/BlockQuote.svelte";
  import IconEspiral from "../../components/icons/IconEspiral.svelte";

  let productos = [];
  onMount(async () => {
    const res = await fetch("/data/products.json");
    productos = [...await res.json()];
  });

  let autoplay = false;
  let delay = 2000; //ms
  let showIndicators = false;
  let transitionDuration = 1000; //ms
  let defaultIndex = 3; //start from 0
</script>

<style lang="scss">
  @import "../../styles/main.scss";
  .swipe-holder {
    height: 40vh;
    width: 100%;
    margin-top: $h2;
  }
</style>

<svelte:head>
  <title>TODH - Artwork</title>
  
</svelte:head>

<PageTitle pageTitle="Coagulando la vibración" pageSubTitle="Sergio Forés" />

<div class="swipe-holder">
  <Swipe {showIndicators} {autoplay} {delay} {transitionDuration} {defaultIndex}>
    <SwipeItem>
      <img src="img/img0.jpg" alt="">
    </SwipeItem>
    <SwipeItem>
      <img src="img/img4.jpg" alt="">
    </SwipeItem>
    <SwipeItem>
      <img src="img/img2.jpg" alt="">
    </SwipeItem>
    <SwipeItem>
      <img src="img/img3.jpg" alt="">
    </SwipeItem>
  </Swipe>
</div>

<Content>
  <ContentArea>
    
  <Area>
    <Cards>
      {#each productos as producto}
      <a href="/products/{$url(producto.slug)}">
        <Card 
          title={producto.title} 
          description={producto.description} 
          image={producto.imagen}
          variante={3}
        /></a>
      {:else}
        <Loading/>
      {/each}
    </Cards>
  </Area>

  <Banner variante={0}>
    <IconEspiral />
    <BlockQuote variante={0} quote="This is a blockquote" author="Author" />
  </Banner>

</ContentArea>
</Content>