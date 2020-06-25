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
    let active = false;
</script>

<style lang="scss">
    @import "../styles/main.scss";
    .canvas {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .active {
        animation-name: rota;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        path {
            stroke-width: 1px;
        }
    }
    
    svg {
        max-width: $h5;
        height: 50px;
        transition: all .3s linear;
        margin-top: -$h2;
    }
    
    .logo-hexa {
        width: 50%;
        height: 50%;
        stroke: black;
    }
    .triangle {
        /* stroke-width: 0; */
        animation-iteration-count: infinite;
        animation-duration: 5s;
        /* animation-fill-mode: forwards; */
        &:nth-child(1) {
            /* transform-origin: center left; */
            /* fill: $color_uno;  */
            animation-name: animation_uno;
        }
        &:nth-child(2) {
            /* transform-origin: bottom right; */
            animation-name: animation_dos;
            /* fill: $color_dos; */
        }
        &:nth-child(3) {
            /* fill: $color_tres; */
            animation-name: animation_cuatro;
        }
        &:nth-child(4) {
            /* fill: $color_cuatro; */
            /* transform-origin: bottom right; */
        }
        &:nth-child(5) {
            animation-name: animation_cuatro;
            /* fill: $color_cero; */
        }
        &:nth-child(6) {
            animation-name: animation_tres;
            /* fill: $color_dos; */
        }

    }
    @keyframes aumenta {
        50% {
            transform: scale(1.1);
        }
    }
    @keyframes rota {
        100% {
            transform: rotate(90deg);
        }
    }
    @keyframes animation_uno {
        30% {
            fill: $color_3;
        }
    }
    @keyframes animation_dos {
        40% {
            fill: aquamarine;
            mix-blend-mode: screen;
        }
    }
    @keyframes animation_tres {
        50% {
            fill: deeppink;
        }
    }
    @keyframes animation_cuatro {
        100% {
            fill: $white;
        }
    }

</style>
<section class="canvas">
    <svg class:active={active} on:click="{() => active = !active}" class="logo-hexa" viewBox="0 0 53 46">
        <path class="triangle" vector-effect="non-scaling-stroke" d="M39 0l14 23H26z"/>
        <path class="triangle" vector-effect="non-scaling-stroke" d="M13 0l13 23H0z"/>
        <path class="triangle" vector-effect="non-scaling-stroke" d="M26 23l13 22H13z"/>
        <path class="triangle" vector-effect="non-scaling-stroke" d="M53 23L39 45 26 23z"/>
        <path class="triangle" vector-effect="non-scaling-stroke" d="M39 0L26 23 13 0z"/>
        <path class="triangle" vector-effect="non-scaling-stroke" d="M26 23L13 45 0 23z"/>
    </svg>

</section>