<script>
    import {tweenedStore} from "../store/anime.js";
    function setToOne() {
        Math.floor(Math.random() * 10);
        $tweenedStore += 10;
    }
    function getRandomIndex() {
        console.log(Math.floor(Math.random() * 10))
        $tweenedStore = Math.floor(Math.random() * 10);
        return $tweenedStore;
	}
</script>

<style lang="scss">
    @import "../styles/main.scss";
    .canvas {
        /* min-height: 500px; */
        background-color: grey;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    svg,
    polygon {
        fill: $color_cero;
        width: 50px;
        height: 50px;
    }

    .logo-hexa {
        width: 50%;
        height: 50%;
        stroke: black;
    }
    .triangle {
        stroke-width: 0;
        /* mix-blend-mode: color-dodge; */
        &:nth-child(1),
        &:nth-child(13),
        &:nth-child(2),
        &:nth-child(24) {
            fill: $color_uno;
        }
        &:nth-child(21),
        &:nth-child(23),
        &:nth-child(7),
        &:nth-child(22) {
            fill: $color_dos;
        }
        &:nth-child(4),
        &:nth-child(15),
        &:nth-child(6),
        &:nth-child(5) {
            fill: $color_tres;
        }
        &:nth-child(12),
        &:nth-child(18),
        &:nth-child(11),
        &:nth-child(19) {
            fill: $color_cuatro;
        }
        animation-duration: 3s;
        animation-name: animation_one;
        animation-iteration-count: infinite;
    }
    @keyframes animation_one {
        50% {
            transform: rotateX(-90deg) translateZ(50px);
        }
    }
</style>
<section class="canvas">
    <svg on:click={getRandomIndex} class="logo-hexa" viewBox="0 0 105 91">
        <path 
        style="transform: rotateX({$tweenedStore}0deg)"
        class="triangle triangle-1"  vector-effect="non-scaling-stroke" d="M79 0l13 23H66z"/>
        <path class="triangle triangle-2"  vector-effect="non-scaling-stroke" d="M66 23l13 22H53z"/>
        <path class="triangle triangle-3"  vector-effect="non-scaling-stroke" d="M53 0l13 23H39z"/>
        <path class="triangle triangle-4"  vector-effect="non-scaling-stroke" d="M26 0l13 23H13z"/>
        <path class="triangle triangle-5"  vector-effect="non-scaling-stroke" d="M39 23l14 22H26z"/>
        <path class="triangle triangle-6"  vector-effect="non-scaling-stroke" d="M13 23l13 22H0z"/>
        <path class="triangle triangle-7"  vector-effect="non-scaling-stroke" d="M26 45l13 23H13z"/>
        <path class="triangle triangle-8"  vector-effect="non-scaling-stroke" d="M53 45l13 23H39z"/>
        <path class="triangle triangle-9"  vector-effect="non-scaling-stroke" d="M39 68l14 23H26z"/>
        <path class="triangle triangle-10" vector-effect="non-scaling-stroke"  d="M66 68l13 23H53z"/>
        <path class="triangle triangle-11" vector-effect="non-scaling-stroke"  d="M79 45l13 23H66z"/>
        <path class="triangle triangle-12" vector-effect="non-scaling-stroke"  d="M79 45L66 68 53 45z"/>
        <path class="triangle triangle-13" vector-effect="non-scaling-stroke"  d="M92 23L79 45 66 23z"/>
        <path class="triangle triangle-14" vector-effect="non-scaling-stroke"  d="M66 23L53 45 39 23z"/>
        <path class="triangle triangle-15" vector-effect="non-scaling-stroke"  d="M39 23L26 45 13 23z"/>
        <path class="triangle triangle-16" vector-effect="non-scaling-stroke"  d="M53 0L39 23 26 0z"/>
        <path class="triangle triangle-17" vector-effect="non-scaling-stroke"  d="M79 0L66 23 53 0z"/>
        <path class="triangle triangle-18" vector-effect="non-scaling-stroke"  d="M105 45L92 68 79 45z"/>
        <path class="triangle triangle-19" vector-effect="non-scaling-stroke"  d="M92 68L79 91 66 68z"/>
        <path class="triangle triangle-20" vector-effect="non-scaling-stroke"  d="M66 68L53 91 39 68z"/>
        <path class="triangle triangle-21" vector-effect="non-scaling-stroke"  d="M53 45L39 68 26 45z"/>
        <path class="triangle triangle-22" vector-effect="non-scaling-stroke"  d="M39 68L26 91 13 68z"/>
        <path class="triangle triangle-23" vector-effect="non-scaling-stroke"  d="M26 45L13 68 0 45z"/>
        <path class="triangle triangle-24" vector-effect="non-scaling-stroke"  d="M92 23l13 22H79z"/>
      </svg>
</section>