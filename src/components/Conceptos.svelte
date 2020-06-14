<script>
    import Loading from '../components/Loading.svelte';
    // import List from '../components/List.svelte';
    import {
        onMount
    } from 'svelte';

    export let conceptos = [];

    onMount(async () => {
        const res = await fetch("/data/conceptos.json");
        conceptos = [...await res.json()];
    });
</script>

<style lang="scss">
    @import "../styles/main.scss";
</style>

<dl>
{#each conceptos as concepto}
    <dt>{concepto.title}</dt>
    <dd>
        {@html concepto.text}
        <a href={concepto.href} target={concepto.target}>{concepto.link}</a>
    </dd>
{/each}
</dl>