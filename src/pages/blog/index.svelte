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
  import PageTitle from "../../components/PageTitle.svelte";
  import Loading from '../../components/Loading.svelte';
  import Content from "../../components/Content.svelte";
  import ContentArea from "../../components/ContentArea.svelte";
  import Area from "../../components/Area.svelte";
  import Cards from "../../components/Cards.svelte";
  import Card from "../../components/Card.svelte";

  let autoplay = false;
  let delay = 2000; //ms
  let showIndicators = false;
  let transitionDuration = 1000; //ms
  let defaultIndex = 0; //start from 0

  let posts = [];
  onMount(async () => {
    const res = await fetch("/data/posts.json");
    posts = [...await res.json()];
  });
</script>

<style lang="scss">
  @import "../../styles/main.scss";
  .swipe-holder{
    height: 30vh;
    width: 100%;
  }
</style>

<svelte:head>
  <title>Blog TODH</title>
</svelte:head>

<PageTitle pageTitle="Blog" pageSubTitle="My crazy thoughts" />

<Content>
  <ContentArea>

    <div class="swipe-holder">
      <Swipe {showIndicators} {autoplay} {delay} {transitionDuration} {defaultIndex}>
        <SwipeItem>
          <img src="img/img0.jpg" alt="">
        </SwipeItem>

        <SwipeItem>
          <img src="/img/img2.jpg" alt="">
        </SwipeItem>

        <SwipeItem>
          <img src="/img/img3.jpg" alt="">
        </SwipeItem>

        <SwipeItem>
          <img src="/img/img4.jpg" alt="">
        </SwipeItem>
      </Swipe>
    </div>

    <Area>
      <Cards>
        {#each posts as post}
          <Card 
          title={post.title}
          description={post.excerpt}
          image={post.imagen}
          variante={4}
          >
            <a href="/blog/{$url(post.slug)}">
            Read >
            </a>
          </Card>
        {/each}
      </Cards>
  </Area>

  </ContentArea>
  </Content>  