<script>
  export let size = "100%";
  let active = false;
</script>

<style lang="scss">
  @import "../../styles/main.scss";

  svg {
    fill: black;
    path {
      stroke: $tertiary;
    }
  }

  svg.active path {
    stroke: none;
    stroke-dasharray: 0;
  }
</style>

<svg style="width: {size};" class:active="{active}" on:click="{() => active = !active}"
  xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 193 169">
  <path fill="none" d="M4.054 164.65l30.564-52.938 30.563 52.938H4.054zM65.763
      164.65l30.563-52.938 30.562 52.938H65.763zM127.186
      164.65l30.563-52.938 30.563 52.938h-61.126zM34.936 111.176L65.5
      58.24l30.564 52.936H34.936zM96.442 111.176l30.563-52.936 30.564
      52.936H96.442zM65.787 57.84L96.35 4.902l30.562 52.936H65.787z" vector-effect="non-scaling-stroke" />
  <circle cx="168.317" cy="18.147" r="6.044" transform="matrix(.67024 0 0 .67024 -16.6 -8.11)" />
  <circle cx="214.102" cy="98.498" r="6.045" transform="matrix(.67024 0 0 .67024 -16.6 -8.11)" />
  <circle cx="259.858" cy="178.241" r="6.045" transform="matrix(.67024 0 0 .67024 -16.6 -8.11)" />
  <circle cx="305.727" cy="257.757" r="6.045" transform="matrix(.67024 0 0 .67024 -16.6 -8.11)" />
  <circle cx="214.102" cy="257.757" r="6.045" transform="matrix(.67024 0 0 .67024 -16.6 -8.11)" />
  <circle cx="123.237" cy="257.757" r="6.044" transform="matrix(.67024 0 0 .67024 -16.6 -8.11)" />
  <circle cx="30.816" cy="257.757" r="6.045" transform="matrix(.67024 0 0 .67024 -16.6 -8.11)" />
  <circle cx="76.892" cy="178.241" r="6.045" transform="matrix(.67024 0 0 .67024 -16.6 -8.11)" />
  <circle cx="168.317" cy="178.241" r="6.045" transform="matrix(.67024 0 0 .67024 -16.6 -8.11)" />
  <circle cx="123.237" cy="98.498" r="6.044" transform="matrix(.67024 0 0 .67024 -16.6 -8.11)" />
</svg>