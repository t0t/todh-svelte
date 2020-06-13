<script>
    import Nav from "../Nav.svelte";
    import SiteBrand from "../components/SiteBrand.svelte";
    import SiteFooter from "../components/SiteFooter.svelte";
</script>

<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,400;0,700;1,400&display=swap" rel="stylesheet">
</svelte:head>


<style lang="scss">
    @import "../styles/main.scss";
</style>

<main class="Main">
    <SiteBrand />
    <nav class="Main__nav">
        <Nav />
    </nav>
    <slot></slot>
    <SiteFooter />
</main>
