<script>
    export let title = "Default title";
    export let description = "Default content";
    export const caption = "Default caption";
    export const alt = "Default alt";
    export let image = "img/img0.jpg";
    export let hasImage = true;
    export let hasInlineSvg = false;
    export let variante = 2;
    let modificador = [
        "Default",
        "Inverse",
        "White",
        "Line",
        "Transparent"
    ];
</script>

<style lang="scss">
    @import "../styles/main.scss";
    .Default {
        background-color: $tertiary;
    }
    .Inverse {
        color: $light_grey;
        background-color: $primary;
    }
    .White {
        .CardTitle {
            color: $primary;
        }
        .CardContent {
            color: $dark_grey;
        }
        background-color: $white;
        border-bottom-right-radius: $h2;
        border-bottom-left-radius: $h2;
    }
    .Line {
        background-color: transparent;
        .CardMain {
            background-color: transparent;
            margin-top: $h2;
        }
    }
    .Transparent {
        border: none;
    }
    .hasLink {
        &:hover {
            cursor: pointer;
        }
    }
    .Card {
        
        &Title {
            padding-top: $h1;
            padding-bottom: $h0;
        }
        &Main {
            padding-left: $h2;
            padding-right: $h2;
        }
        &Content {
            padding-bottom: $h2;
            margin-left: 0;
            margin-bottom: 0;
        }
    }
</style>

<div 
class="Card  {modificador[variante]}" 
>
    {#if hasImage}
        <img src="{image}" alt="{alt}">
    {/if}
    {#if hasInlineSvg}
    <slot name="hasSvg">Put here inline-svg</slot>
    {/if}
    <div class="CardMain">
        <h4 class="CardTitle">{title}</h4>
        {#if description}
        <p class="CardContent">{description}</p>
        {/if}
        <slot></slot>
    </div>
</div>