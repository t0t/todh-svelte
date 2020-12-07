<script>
    import { url } from "@sveltech/routify";
    let home = "/";
</script>

<style lang="scss">
    @import "../styles/main.scss";

    .SiteBrand {
        display: flex;
        justify-content: flex-start;
        padding: 10px;
        align-items: center;
        color: $tertiary;
    }

    .logo {
        > g {
            transform: translateY(.5px);
        }
        circle {
            fill: none;
            stroke: white;
            stroke-width: .5;
        }
    }
</style>

<div class="SiteBrand">
    <a href="{$url(home)}" class="SiteBrand" alt="Brand Logo">
        <svg class="logo" width="51" height="51">
            <g>
                <circle cx="25" cy="25" r="25" />
                <g>
                    <circle cx="12.5" cy="25" r="12.5" />
                    <circle cx="38" cy="25" r="12.5" />
                </g>
                <g>
                    <circle cx="6.5" cy="25" r="6.25" />
                    <circle cx="19" cy="25" r="6.25" />
                    <circle cx="31.5" cy="25" r="6.25" />
                    <circle cx="44" cy="25" r="6.25" />
                </g>
            </g>
        </svg>
    </a>
    <h4>Sergio Forés</h4>
</div>