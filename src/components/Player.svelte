<script>
    export let name;
    export let points;
    let showControls = false;
    const addPoint = () => (points += 1);
    const removePoint = () => (points -= 1);
    const toggleControls = () => (showControls = !showControls);
</script>
<div>
    {name} tiene {points}
    <button on:click={toggleControls}>
        {#if showControls}
        -
        {:else}
        +
        {/if}
    </button>
    
    {#if showControls}
        <button on:click={addPoint}>+1</button>
        <button on:click={removePoint}>-1</button>
        <input type="number" bind:value={points} >
    {/if}
</div>