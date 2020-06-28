<style lang="scss">
    @import "../styles/main.scss";
    $area: 450px;

    .logo {
        display: flex;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }
    svg {
        rect {
            animation-name: anim;
            animation-direction: alternate;
            animation-iteration-count: infinite;

            &:nth-child(1) {
                fill: #fe8e88;
                animation-duration: 3.7s;
                &:hover {
                    animation: none;
                    /* animation-direction: normal; */
                    transform: scale(4);
                    clip-path: circle(100%); 
                    transition: 1s linear all;
                    /* animation-play-state: paused; */
                    /* clip-path: circle(100%); */
                    animation-iteration-count: 1;
                    animation-fill-mode: forwards;
                    /* animation-play-state: paused; */
                }
            }
            &:nth-child(2) {
                animation-duration: 2.1s;
                fill: $color_dos;
                &:hover {
                    animation: none;
                    transform: scale(3);
                    clip-path: circle(100%); 
                    transition: 1s linear all;
                }
            }
            &:nth-child(3) {
                animation-duration: 7.1s;
                fill: $color_tres;
                &:hover {
                    animation: none;
                    transform: scale(3);
                }
            }
            &:nth-child(4) {
                animation-duration: 4.5s;
                fill: $color_cuatro;
            }
        }
    }

    @keyframes anim0 {
        100% { clip-path: circle(100%); 
        }
    }
    @keyframes anim {
        0% { clip-path: circle(10% at 50% 50%); }
        25% { clip-path: circle(10% at 50% 50%); }
        50% { clip-path: circle(4% at 12% 84%); }
        75% { clip-path: circle(3% at 70% 51%); }
        100% { clip-path: circle(2% at 70% 51%); }
    }

</style>

    <svg class="logo" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <rect class="" x="0" y="0" width="100" height="100"></rect>
        <rect class="" x="0" y="100" width="100" height="100"></rect>
        <rect class="" x="100" y="0" width="100" height="100"></rect>
        <rect class="" x="100" y="100" width="100" height="100"></rect>
    </svg>
    <div class="container"></div>
