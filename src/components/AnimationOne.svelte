<script>
    import {
        onMount
    } from 'svelte';
    import anime from 'animejs/lib/anime.es.js';
    onMount(async () => {
        anime({
            targets: ".hexagon",
            translateY: 50,
            direction: 'alternate',
            loop: true,
            endDelay: 1000
        });
        anime({
            targets: ".animate",
            translateX: 270,
            direction: 'alternate',
            loop: true,
            endDelay: 1000
        });
        anime({
            targets: ".logo-hexa-2",
            translateX: 270,
            direction: 'alternate',
            loop: true,
            endDelay: 1000,
            keyframes: [
                {translateY: -40},
                {translateX: 250},
                {translateY: 40},
                {translateX: 0},
                {translateY: 0}
            ],
        });
    });
</script>
<style>
    svg,
    polygon {
        fill: #FFC730;
        width: 50px;
        height: 50px;
    }
    .logo-hexa {
        fill: lime;
        width: 200px;
        height: 200px;
        stroke-width: 1px;
    }

    .hexagon {
        fill: white;
    }
</style>
<svg class="animate" viewBox="0 0 120 120" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="10" />
</svg>
<svg class="hexagon" viewBox="0 0 128 128">
    <polygon class="hexagon" points="64 127 8.5 96 8.5 32 64 1.7680859754065636e-7 119 32 119 96"></polygon>
</svg>

<svg class="logo-hexa" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 150 150">
    <path fill="none" d="M0 0h150v150H0z" />
    <path fill="none" stroke="#fff"
        d="M800 800H438.201M800 800L619.1 486.673M800 800l180.9-313.327M800 800h361.8M800 800l180.9 313.33M800 800l-180.9 313.33M438.201 800l-180.9-313.327M438.201 800L619.1 486.673M438.201 800L619.1 1113.33M438.201 800l-180.899 313.33M619.1 486.673H257.301m361.799 0L800 173.346M619.1 486.673h361.8m-723.599 0l180.9-313.327m-180.9 313.327L76.402 800M980.9 486.673L800 173.346m180.9 313.327h361.8m-361.8 0L1161.8 800M619.1 486.673L438.201 173.346m361.799 0H438.201m361.799 0h361.8m0 626.654l180.9-313.327M1161.8 800l180.9 313.33M1161.8 800l-180.9 313.33m0-626.657l180.9-313.327m180.9 313.327l-180.9-313.327m180.9 313.327L1523.6 800m-542.7 313.33H619.1m361.8 0h361.8m-361.8 0L800 1426.65m-180.9-313.32l-180.899 313.32M1161.8 800h361.8m-180.9 313.33L1523.6 800m-180.9 313.33l-180.9 313.32m-542.7-313.32H257.302m361.798 0L800 1426.65m-542.698-313.32L76.402 800m180.9 313.33l180.899 313.32m0-626.65H76.402M980.9 1113.33l180.9 313.32m-361.8 0H438.201m361.799 0h361.8"
        transform="matrix(.09518 0 0 .09518 -1.148 -1.147)" />
    <circle cx="438.201" cy="173.346" r="38.3" fill="#fff" transform="matrix(.09518 0 0 .09518 -1.148 -1.147)" />
    <circle cx="1161.8" cy="173.346" r="38.3" fill="#fff" transform="matrix(.09518 0 0 .09518 -1.148 -1.147)" />
    <circle cx="1523.6" cy="800" r="38.3" fill="#fff" transform="matrix(.09518 0 0 .09518 -1.148 -1.147)" />
    <circle cx="76.402" cy="800" r="38.3" fill="#fff" transform="matrix(.09518 0 0 .09518 -1.148 -1.147)" />
    <circle cx="438.201" cy="1426.65" r="38.3" fill="#fff" transform="matrix(.09518 0 0 .09518 -1.148 -1.147)" />
    <circle cx="1161.8" cy="1426.65" r="38.3" fill="#fff" transform="matrix(.09518 0 0 .09518 -1.148 -1.147)" />
    <circle cx="257.301" cy="486.673" r="38.3" fill="#fff" transform="matrix(.09518 0 0 .09518 -1.148 -1.147)" />
    <circle cx="800" cy="173.346" r="38.3" fill="#fff200" transform="matrix(.09518 0 0 .09518 -1.148 -1.147)" />
    <circle cx="1342.7" cy="486.673" r="38.3" fill="#fff" transform="matrix(.09518 0 0 .09518 -1.148 -1.147)" />
    <circle cx="1342.7" cy="1113.33" r="38.3" fill="#62a526" transform="matrix(.09518 0 0 .09518 -1.148 -1.147)" />
    <circle cx="257.302" cy="1113.33" r="38.3" fill="#62a526" transform="matrix(.09518 0 0 .09518 -1.148 -1.147)" />
    <circle cx="800" cy="1426.65" r="38.3" fill="#fff" transform="matrix(.09518 0 0 .09518 -1.148 -1.147)" />
    <circle cx="438.201" cy="800" r="38.3" fill="#ab63fb" transform="matrix(.09518 0 0 .09518 -1.148 -1.147)" />
    <circle cx="619.1" cy="486.673" r="38.3" fill="#2d2df7" transform="matrix(.09518 0 0 .09518 -1.148 -1.147)" />
    <circle cx="980.9" cy="486.673" r="38.3" fill="#2d2df7" transform="matrix(.09518 0 0 .09518 -1.148 -1.147)" />
    <circle cx="1161.8" cy="800" r="38.3" fill="#ab63fb" transform="matrix(.09518 0 0 .09518 -1.148 -1.147)" />
    <circle cx="980.9" cy="1113.33" r="38.3" fill="#62a526" transform="matrix(.09518 0 0 .09518 -1.148 -1.147)" />
    <circle cx="619.1" cy="1113.33" r="38.3" fill="#62a526" transform="matrix(.09518 0 0 .09518 -1.148 -1.147)" />
    <circle cx="800" cy="800" r="38.3" fill="#ab63fb" transform="matrix(.09518 0 0 .09518 -.723 -1.007)" />
</svg>

<svg class="logo-hexa-2" viewBox="0 0 107 95">
    <path fill="none" d="M0 0h106.8v94.135H0z"/>
    <path fill="#000" d="M106.057 46.481l-26.25 45.466h-52.5l26.25-45.466h52.5zM79.807 1.015L53.557 46.48h-52.5l26.25-45.466h52.5z"/>
    <path d="M79.807 1.015l26.25 45.466-26.25 45.467-26.25-45.467 26.25-45.466zM27.307 1.015l26.25 45.466-26.25 45.467L1.058 46.48l26.25-45.466z"/>
  </svg>