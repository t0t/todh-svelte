<script>
    import { onMount } from 'svelte';
    import * as d3 from 'd3';

    const dataset = [
        {"skill": "SCSS", "percentage": 80},
        {"skill": "SVG", "percentage": 85.3},
        {"skill": "Html", "percentage": 80.1},
        {"skill": "D3", "percentage": 15},
        {"skill": "JS", "percentage": 20.2},
        {"skill": "Svelte", "percentage": 28.3},
        {"skill": "WP", "percentage": 40.1},
        {"skill": "Git", "percentage": 20.1}
    ]

    onMount(() => {
        const svgWidth = 360;
        const svgHeight = 360;
        const radius = Math.min(svgWidth, svgHeight) / 2;

        const svg = d3.select("#graph")
            .attr("width", svgWidth)
            .attr("height", svgHeight)
            .attr("class", "svg-container");

        const g = svg.append("g")
            .attr("transform", `translate(${radius},${radius})`);

        const pie = d3.pie().value((d) => d.percentage)

        const colors = d3.scaleOrdinal(d3.schemeAccent)

        const path = d3.arc()
            .outerRadius(radius)
            .innerRadius(0);

        const grupos = g.selectAll("g")
            .data(pie(dataset))
            .enter()
            .append("g");

        grupos.append("path")
            .attr("d", path)
            .attr("fill", (d) => colors(d.data.percentage));

        grupos.append("text")
            .attr("text-anchor", "middle")
            .attr("transform", (item) => `translate(${path.centroid(item)})`)
            .text((item) => item.data.skill);
    });
</script>

<style lang="scss">
    @import "../styles/main.scss";
    .svg-container {
        background-color: $black;
        margin-left: auto;
        margin-right: auto;
    }
    path {
        fill: blue;
    }
</style>

<svg id="graph"></svg>