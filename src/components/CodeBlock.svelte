<script>
  
  export let language;
  export let code;
  export let header;

</script>

<style lang="scss">
  @import "../styles/main.scss";
  .CodeBlock {
    margin-bottom: $h3;
  }
  pre {
        background-color: $alpha_black;
        margin: 0;
        padding-left: $h0;
        padding-top: $h0;
        overflow: hidden;
        &:hover {
            background-color: $primary;
        }
    }
    .language {
        margin: 0;
        &-html {
            color: $white;
        }
        &-css {
            color: $color_2;
        }
        &-js {
            color: $color_1;
        }
        &.comment {
            color: $tertiary;
        }
    }
    pre > code {
        margin: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-top: 0;
        &:last-child {
            padding-bottom: $h0;
        };
        color: $color_3;
    }

</style>

<div class="CodeBlock">
  <h2>{header}</h2>
  <pre><code class="language-{language}">{code}</code></pre>
</div>