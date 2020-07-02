<script>
  export let language;
  export let code;
  export let header;
</script>

<style lang="scss">
  @import "../styles/main.scss";
  .CodeBlock {
    margin-bottom: $h1;
    @include media(s2) {
        margin-bottom: $h2;
    }
  }
  pre {
        margin-top: 0;
        padding-left: $h0;
        padding-top: $h0;
        padding-bottom: $h0;
        overflow: auto;
        display: block;
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