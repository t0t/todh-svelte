<script>
  import {
    onMount
  } from 'svelte';
  import {
        url,
        isActive
    } from "@sveltech/routify";
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
</script>

<style lang="scss">
  @import "../../styles/main.scss";
</style>

<svelte:head>
  <title>TODH - Artwork</title>
</svelte:head>

<PageTitle pageTitle="Coagulando la vibración" pageSubTitle="Sergio Forés" />

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