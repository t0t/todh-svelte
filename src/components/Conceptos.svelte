<script>
    import Loading from '../components/Loading.svelte';
    import List from '../components/List.svelte';
    import {
        onMount
    } from 'svelte';

    export let conceptos = [];

    onMount(async () => {
        const res = await fetch("/data/conceptos.json");
        conceptos = [...await res.json()];
    });
</script>

<List>
    {#each conceptos as concepto}
    <li>
      <p><strong>{concepto.title} </strong>{@html concepto.text}
      <a href="{concepto.href}" target="{concepto.target}"><small>{concepto.link}</small></a></p>
    </li>
    {:else}
        <Loading/>
    {/each}
</List>