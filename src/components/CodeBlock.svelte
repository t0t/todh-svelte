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
        width: 80vw;
        background-color: $alpha_black;
        margin: 0;
        padding-left: $h0;
        padding-top: $h0;
        padding-bottom: $h0;
        overflow: auto;

        &:hover {
            background-color: $primary;
        }
        @include media(s1) {
            width: 80vw;
        }
    }
    code {
        width: 100px;
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
        <h3>{header}</h3>
    {/if}
    <pre><code class="language-{language}">{code}</code></pre>
</div>