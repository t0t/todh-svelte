<script>
    import Loading from '../components/Loading.svelte';
    import {
        onMount
    } from 'svelte';

    export let libros = [];

    onMount(async () => {
        const res = await fetch("/data/libros.json");
        libros = [...await res.json()];
    });
</script>

<style lang="scss">
    @import "../styles/main.scss";
    li a {
        color: inherit;
    }
</style>

<ul>
    {#each libros as item}
        <li><a href="{item.href}" target="{item.target}">{item.link}</a></li>
    {:else}
        <Loading/>
    {/each}
</ul>