<script>
  
  export let language;
  export let code;
  export let header;

</script>

<style lang="scss">
  @import "../styles/main.scss";
  .CodeBlock {
    margin-bottom: $h2;
  }
  pre {
        margin-top: 0;
        background-color: $alpha_black;
        padding-left: $h0;
        padding-top: $h0;
        padding-bottom: $h0;
        overflow: auto;
        display: block;
        width: 90vw;
        /* width: 336px; */
        
        &:hover {
            background-color: $primary;
        }
        @include media(s1) {
            width: 76vw;
            /* width: 684px; */
        }
    }

    .language {
        margin: 0;
        &-html {
            color: $color_2;
        }
        &-css {
            color: $white;
        }
        &-javascript {
            color: $color_1;
        }
        &-json {
            color: $color_3;
        }
    }
</style>

<div class="CodeBlock">
    {#if header}
        <h5>{header}</h5>
    {/if}
    <pre><code class="language-{language}">{code}</code></pre>
</div>