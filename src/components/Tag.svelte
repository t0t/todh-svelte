<script>
    export let tag;
    export let isCode = false;
</script>

<style lang="scss">
    @import "../styles/main.scss";
    .tag {
        border-radius: 3px;
        padding: $h-2 $h0;
        margin-bottom: $h-2;
        &--code {
            /* padding-top: $h-2; */
        }
        &--default {
            /* display: inline-block; */
        }
    }
</style>

{#if isCode === true}
    <code class="tag  tag--code">
        {tag}
    </code>
{:else}
    <small class="tag  tag--default">
        {tag}
    </small>
{/if}

