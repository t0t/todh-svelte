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
        display: grid;
        align-items: center;

        &:hover {
            /* transition: all 1s linear; */
            cursor: pointer;

            circle:nth-child(1) {
                fill: $black;
            }

            circle:nth-child(2) {
                fill: $white;
            }
        }
    }

    svg {
        width: $h3;

        circle:nth-child(2) {
            fill: $white;
        }

        @include media(s2) {
            circle:nth-child(1) {
                fill: $white;
            }

            circle:nth-child(2) {
                fill: $black;
            }
        }
    }
</style>

<div class="Main__brand">
    <a href="{$url(home)}" class="SiteBrand" alt="Brand Logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57 39">
            <title>Brand Logo</title>
            <g fill-rule="evenodd" stroke-linejoin="round" stroke-linecap="round">
                <g transform="matrix(.15985 0 0 .13168 -9003.181 -171.008)">
                    <circle cx="15135.5" cy="3089.34" r="1097.64" fill="none" stroke="#111111" stroke-width="43.84"
                        stroke-dasharray="43.84,131.52,0,0" transform="matrix(.10706 0 0 .12986 54821.7 1042.87)">
                    </circle>
                    <circle cx="15135.5" cy="3089.34" r="1097.64" fill="none" stroke="#111111" stroke-width="26.3"
                        transform="matrix(.10706 0 0 .12986 54939.2 1042.87)"></circle>
                    <g transform="matrix(0 .19668 -.0967 0 59616.9 -2481.81)">
                        <path d="M19961 30959.1v2495.3" fill="none"></path>
                        <path
                            d="M19941.7 30959.1v64.7h38.6v-64.7h-38.6zm0 582.2v64.7h38.6v-64.7h-38.6zm0 582.3v64.7h38.6v-64.7h-38.6zm0 582.3v64.7h38.6v-64.7h-38.6zm0 582.3v64.7h38.6v-64.7h-38.6z">
                        </path>
                    </g>
                    <circle cx="15135.5" cy="3089.34" r="1097.64" transform="matrix(.0057 0 0 .00692 56473.4 1422.7)">
                    </circle>
                    <circle cx="15135.5" cy="3089.34" r="1097.64" transform="matrix(.0057 0 0 .00692 56355.8 1422.7)">
                    </circle>
                    <circle cx="15135.5" cy="3089.34" r="1097.64" transform="matrix(.0057 0 0 .00692 56415.1 1299.4)">
                    </circle>
                    <circle cx="15135.5" cy="3089.34" r="1097.64" transform="matrix(.0057 0 0 .00692 56414.8 1545.34)">
                    </circle>
                </g>
            </g>
        </svg>
    </a>
</div>