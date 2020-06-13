<script>
    import {
        url,
        isActive
    } from "@sveltech/routify";
    import {
        onMount
    } from 'svelte';

    import Content from "../../components/Content.svelte";
    import ContentArea from "../../components/ContentArea.svelte";
    import Area from "../../components/Area.svelte";
    export let slug;

    let productos = [];
    onMount(async () => {
        const res = await fetch("/data/products.json");
        productos = [...await res.json()];
    });

    let cur = 0;

    function changeSlide(slide) {
        cur = slide;
    }
</script>

<style lang="scss">
    @import "../../styles/main.scss";

    .Product {
        @include media(s1) {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-auto-flow: row;
            grid-auto-rows: auto;
            grid-template-areas:
                "c c c c c"
                "a a a a a"
                "n n n n n"
            ;
            gap: $h2;
        }

        @include media(s2) {
            grid-template-areas:
                "a a a c c"
                "a a a n n"
            ;
        }

        @include media(s3) {
            gap: $h5;
        }

        &Article {
            grid-area: a;
        }

        &Content {
            grid-area: c;
            text-align: left;

            @include media(s0) {
                padding: $h1;

                p {
                    margin-bottom: 0;
                }
            }

            h3 {
                padding-bottom: $h1;
            }
        }

        &Nav {
            grid-area: n;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax($h4, 1fr));
            grid-auto-flow: row;
            grid-auto-rows: 1fr;
            gap: $h0;

            @include media(s0) {
                padding: $h1;
                margin-bottom: $h1;
            }

            img {
                max-width: $h4;
            }
        }

        @include media(s1) {
            &ImgCaption {
                margin-top: $h0;
            }

            p {
                margin-bottom: 0;
            }
        }
    }
</style>

<Content>
    <ContentArea>
        <Area>
        <div class="Product">
            {#each productos as product}
                {#if (product.slug === slug)}
                <article class="ProductArticle">
                    <figure class="ProductImgContainer">
                        <img src="/{product.imagen}" alt="{product.title}"/>
                        <figcaption class="ProductImgCaption">
                            <strong>{product.title}</strong> 
                            <em>{product.description}</em>
                        </figcaption>
                    </figure>
                </article>
                <main class="ProductContent">
                    <h3>{@html product.content.h1}</h3>
                    <p>{@html product.content.p}</p>
                </main>
                {/if}
                {/each}
                <nav class="ProductNav">
                    {#each productos as product}
                    <a href="{product.slug}" class:selected="{$isActive(product.thumb)}">
                    <img src="/{product.thumb}" alt="">
                    </a>
                    {/each}
                </nav>
            </div>
        </Area>
    </ContentArea>
</Content>