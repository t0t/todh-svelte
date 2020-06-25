<script>
    import { url } from "@sveltech/routify";
    let home = "/";
</script>

<style lang="scss">
    @import "../styles/main.scss";

    .SiteBrand {
        display: flex;
        justify-content: center;
        padding: $h0;
        align-items: center;

        &:hover {
            /* transition: all 1s linear; */
            cursor: pointer;

            path:nth-child(1) {
                fill: $black;
            }

            path:nth-child(2) {
                fill: $white;
            }
        }
    }

    svg {
        width: $h3;

        path:nth-child(2) {
            fill: $white;
        }

        @include media(s2) {
            /* path:nth-child(1) {
                fill: $color_cuatro;
            } */

            path:nth-child(2) {
                fill: $color_cero;
            }
        }
    }
</style>

<div>
    <a href="{$url(home)}" class="SiteBrand" alt="Brand Logo">
        <svg class="logo-hexa-2" viewBox="0 0 105 91">
            <path fill="none" d="M0 0h106.8v94.135H0z" />
            <path fill="#000"
                d="M106.057 46.481l-26.25 45.466h-52.5l26.25-45.466h52.5zM79.807 1.015L53.557 46.48h-52.5l26.25-45.466h52.5z" />
            <path
                d="M79.807 1.015l26.25 45.466-26.25 45.467-26.25-45.467 26.25-45.466zM27.307 1.015l26.25 45.466-26.25 45.467L1.058 46.48l26.25-45.466z" />
        </svg>
    </a>
</div>