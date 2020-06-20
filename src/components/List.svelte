<script>
    export let type = "numbered";
</script>

<style lang="scss">
    @import "../styles/main.scss";
    .List {
        padding-left: 1.2em;
        &Numbered {
            list-style-type: decimal;
        }
        &Default {
            list-style-type: circle;
        }
    }
</style>

{#if type === "numbered"}
<ol class="List ListNumbered">
    <slot/>
</ol>
{:else}
<ol class="List ListDefault">
    <slot/>
</ol>
{/if}