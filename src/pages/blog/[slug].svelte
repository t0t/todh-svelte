<script>
    import {
    onMount
  } from 'svelte';
    import Content from "../../components/Content.svelte";
    import ContentArea from "../../components/ContentArea.svelte";
    import Area from "../../components/Area.svelte";
    import {
        url
    } from "@sveltech/routify";
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
        padding: $h2;

        &Article h3 {
            text-align: center;
            color: $grey;
            font-weight: normal;
        }

        &Content {
            h3 {
                text-align: inherit;
                margin-bottom: $h3;
            }

            img {
                margin-bottom: $h2;
            }

            @include media(s2) {
                margin-left: auto;
                margin-right: auto;
                margin-top: $h5;
                max-width: 90%;
                /* border: 1px solid $alpha_grey; */
                padding: $h3;
                /* background-color: $tertiary; */
            }

            @include media(s3) {
                max-width: 68%;
            }
        }

        &Header {
            text-align: center;
        }

        &ImgContainer {
            width: 100%;
            overflow: hidden;
        }
    }
</style>

<Content>
    <ContentArea>
        <Area>
        <div class="Post">
        {#each elpost as post}
        {#if (post.slug === slug)}
            <article class="PostArticle">
                <h1 class="PostHeader">
                    {post.title}
                </h1>
                <h3>
                    {@html post.subtitle}
                </h3>
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