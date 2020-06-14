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
            color: $grey;
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

            @include media(s2) {
                margin-top: $h4;
                background-color: $alpha_white;
                padding: $h2;
            }
            
            @include media(s3) {
                padding: $h4;
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
    <PageTitle pageTitle={post.title} pageSubTitle={post.subtitle} />
{/if}
{/each}

<Content>
    <ContentArea>
        <Area>
        <div class="Post">
        {#each elpost as post}
        {#if (post.slug === slug)}
            <article class="PostArticle">
                <div class="PostImgContainer">
                    <img src="/{post.imagen}" alt="{post.title}"/>
                </div>
                <div class="PostContent">
                    <h3>{@html post.content.h1}</h3>
                    <p>{@html post.content.p}</p>
                    <blockquote>{@html post.content.blockquote}</blockquote>
                    <p>{@html post.content.p2}</p>
                    <p>{@html post.content.p3}</p>
                    <p>{@html post.content.p4}</p>
                    <p>{@html post.content.p5}</p>
                    <p>{@html post.content.p6}</p>
                    <img src="/{post.content.img1}" alt="Imagen">
                    <p>{@html post.content.p7}</p>
                    <p>{@html post.content.p8}</p>
                    <p>{@html post.content.p9}</p>
                    <p>{@html post.content.p10}</p>
                    <img src="/{post.content.img2}" alt="Imagen">
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