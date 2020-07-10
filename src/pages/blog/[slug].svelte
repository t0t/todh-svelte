<script>
    import {
    onMount
  } from 'svelte';
    import {
        url
    } from "@sveltech/routify";
    import PageTitle from "../../components/PageTitle.svelte";
    import Content from "../../components/Content.svelte";
    import ContentArea from "../../components/ContentArea.svelte";
    import Area from "../../components/Area.svelte";
    export let slug;

    let elpost = [];
  onMount(async () => {
    const res = await fetch("/data/posts.json");
    elpost = [...await res.json()];
  });
</script>

<style lang="scss">
    @import "../../styles/main.scss";

    .Post {
        @include media(s0) {
            padding: $h0;
        }

        &Article h3 {
            text-align: center;
            font-weight: normal;
        }

        &Content {
            h3 {
                text-align: inherit;
                margin-bottom: $h0;
                @include media(s1) {
                    margin-bottom: $h0;
                }
                @include media(s2) {
                    margin-bottom: $h1;
                }
            }

            img {
                margin-bottom: $h2;
            }

        }

        &Header {
            text-align: center;
        }

        &ImgContainer {
            width: 100%;
            margin-bottom: $h3;
            @include media(s0) {
                margin-top: $h3;
            }
        }
    }
</style>

<svelte:head>
  <title>Blog de TODH</title>
</svelte:head>

{#each elpost as post}
{#if (post.slug === slug)}
    <PageTitle pageTitle={post.title} />
{/if}
{/each}

<Content>
    {#each elpost as post}
    {#if (post.slug === slug)}
    <div class="PostImgContainer">
        <img src="/{post.imagen}" alt="{post.title}"/>
    </div>
    {/if}
    {/each}
    <ContentArea>
        <Area>
            <div class="Post">
            {#each elpost as post}
            {#if (post.slug === slug)}
                <article class="PostArticle">
                    <div class="PostContent">
                        <h3>{@html post.content.h1}</h3>
                        <p>{@html post.content.p}</p>
                        {#if post.content.blockquote}
                        <blockquote>
                            <strong>{post.content.blockquote.quote}</strong>
                            <small>{post.content.blockquote.author}</small>
                        </blockquote>
                        {/if }
                        {#if post.content.p2}
                            <p>{@html post.content.p2}</p>
                        {/if }
                        {#if post.content.p3}
                            <p>{@html post.content.p3}</p>
                        {/if }
                        {#if post.content.p4}
                            <p>{@html post.content.p4}</p>
                        {/if }
                        {#if post.content.p5}
                            <p>{@html post.content.p5}</p>
                        {/if }
                        {#if post.content.p6}
                            <p>{@html post.content.p6}</p>
                        {/if }
                        {#if post.content.img1}
                            <img src="/{post.content.img1}" alt="Imagen">
                        {/if }
                        <p>{@html post.content.p7}</p>
                        <p>{@html post.content.p8}</p>
                        <p>{@html post.content.p9}</p>
                        <p>{@html post.content.p10}</p>
                        {#if post.content.img2}
                            <img src="/{post.content.img2}" alt="Imagen">
                        {/if }
                        <p>{@html post.content.p11}</p>
                        <p>{@html post.content.p12}</p>
                        <p>{@html post.content.p13}</p>
                    </div>
                </article>
            {/if}
            {/each}
            </div>
        </Area>
    </ContentArea>
</Content>