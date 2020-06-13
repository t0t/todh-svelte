<script>
    export const items = [];
    import { fade } from 'svelte/transition';
</script>

<style>
    .List {
        /* border: 1px solid red; */
    }
</style>

<ul class="List" transition:fade>
    <slot/>
</ul>