<style lang="scss">
    @import "../styles/main.scss";
    $area: 450px;
    .triangles {
        display: flex;
        justify-content: center;
        align-items: center;
        width: $area;
        height: $area;
        border: 1px solid $primary;
        border-radius: 50%;
        margin-top: $h4;
        margin-left: auto;
        margin-right: auto;
        background-image: linear-gradient(to bottom right, $color_dos 0%, $primary 60%);
        mix-blend-mode: screen;
        opacity: 0.9;

        &:hover {
            .triangle:not(:nth-child(4)) {
                transform: scale(1.2);
            }
        }

        svg {
            /* animation-name: anim; */
            animation-duration: 3s;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;
            animation-direction: alternate;
            /* animation: rotate 1.5s linear infinite; */
            /* animation-timing-function: steps(3); */
            /* animation-fill-mode: both; */
        }
    }

    .triangle {
        width: $area;
        /* height: 290px; */
        mix-blend-mode: screen;
        opacity: 0.9;
        transition: 400ms ease transform;
        transform-origin: center center;
        
        &:nth-child(1) {
            fill: red;
            clip-path: polygon(0% 0%, 0% 100%, 100% 100%);
        }
        
        &:nth-child(2) {
            fill: lime;
            clip-path:circle(20%);
            transition: .3s ease clip-path;
            &:hover {
                clip-path:circle(100%);
            }
        }
        
        &:nth-child(3) {
            fill: blueviolet;
        }

        &:nth-child(4) {            
            /* clip-path: polygon(0% 0%, 0% 100%, 100% 100%); */
            clip-path:circle(30%);
            fill:gold;
        }
    }

    @keyframes anim {
        
        0% { clip-path: circle(100% at 50% 50%); }
        25% { clip-path: circle(20% at 50% 50%); }
        50% { clip-path: circle(20% at 12% 84%); }
        75% { clip-path: circle(20% at 93% 51%); }
        100% { clip-path: circle(20% at -30% 20%); }
    }

</style>


<div class="triangles">
    <svg width="450px" height="450px" viewBox="0 0 101 101">
        <polygon class="triangle" points="22.303871 50.8576344 36.4167742 75.3019355 8.19096774 75.3019355"></polygon>
        <polygon class="triangle" points="78.7554839 50.8576344 92.8683871 75.3019355 64.6425806 75.3019355"></polygon>
        <polygon class="triangle" points="50.5296774 1.96913978 64.6425806 26.4133333 36.4167742 26.4133333"></polygon>
        <polygon class="triangle" points="50.7049462 99.6344086 8.36623656 26.3121505 93.1022581 26.2783871"></polygon>
    </svg>
</div>