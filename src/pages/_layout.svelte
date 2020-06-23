<script>
    import Nav from "../Nav.svelte";
    import SiteFooter from "../components/SiteFooter.svelte";
    import VanishingHeader from "../components/VanishingHeader.svelte";
    let y = 0;
</script>

<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;1,200;1,300;1,400&display=swap" rel="stylesheet">
    <!-- <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet"> -->
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,400&display=swap" rel="stylesheet">
</svelte:head>

<style lang="scss">
    @import "../styles/main.scss";
    .Main {
        padding-top: $h5;
        width: 100vw;
        display: block;
        @include media(s1) {
            padding-top: $h4;
        }
    }
</style>

<main class="Main">

    <VanishingHeader duration="350ms" offset={50} tolerance={5}>
        <nav class="Main__nav">
            <Nav />
        </nav>
    </VanishingHeader>
    
    <slot></slot>

    <SiteFooter />
    
</main>
