<script>
    let showControls = false;
    const toggleControls = () => (showControls = !showControls);
</script>
<div>
    <button on:click={toggleControls}>
        {#if showControls}
        -
        {:else}
        +
        {/if}
    </button>
    
    {#if showControls}
        <ul>
            <li>Menu item 1</li>
            <li>Menu item 2</li>
            <li>Menu item 3</li>
        </ul>
    {/if}
</div>