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
    export let slug;

    let productos = [];
    onMount(async () => {
        const res = await fetch("/data/products.json");
        productos = [...await res.json()];
    });

</script>

<style lang="scss">
    @import "../../styles/main.scss";

    .Product {
        /* padding: $h0; */
        @include media(s1) {
            /* padding: $h2; */
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
        @include media(s4) {
            gap: $h4;
            padding: $h4;
        }

        &Article {
            grid-area: a;
        }

        &Content {
            grid-area: c;
            text-align: left;

            @include media(s0) {
                padding: $h1;
            }
            
            h3 {
                padding-top: $h2;
                padding-bottom: $h1;
                @include media(s3) {
                    padding-top: $h4;
                }
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
        <aside class="ProductContent">
            <h3>{@html product.content.h1}</h3>
            <p>{@html product.content.p}</p>
        </aside>
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
</Content>