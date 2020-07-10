<script>
  import {
    onMount
  } from 'svelte';
  import {
    url,
    isActive
  } from "@sveltech/routify";
  import PageTitle from "../../components/PageTitle.svelte";
  import Loading from '../../components/Loading.svelte';
  import Content from "../../components/Content.svelte";
  import ContentArea from "../../components/ContentArea.svelte";
  import Area from "../../components/Area.svelte";
  import Cards from "../../components/Cards.svelte";
  import Card from "../../components/Card.svelte";

  let posts = [];
  onMount(async () => {
    const res = await fetch("/data/posts.json");
    posts = [...await res.json()];
  });
</script>

<style lang="scss">
  @import "../../styles/main.scss";
</style>

<svelte:head>
  <title>Blog de TODH</title>
</svelte:head>

<PageTitle pageTitle="Blog" />

<Content>
  <Cards>
    {#each posts as post}
    <div>
      <a href="/blog/{$url(post.slug)}">
        <Card 
        title={post.title}
        description=""
        image={post.imagen}
        variante={3}>
        </Card>
      </a>
    </div>
    {/each}
  </Cards>
</Content>  