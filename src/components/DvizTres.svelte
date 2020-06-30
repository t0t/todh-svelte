<script>
    import { onMount } from 'svelte';
    import * as d3 from 'd3';

    const dataset = [
        {"skill": "Meditation", "percentage": 60},
        {"skill": "Data Vizualization", "percentage": 50},
        {"skill": "CSS Grid/Animation", "percentage": 70},
        {"skill": "Front-end Design", "percentage": 80},
        {"skill": "3D Print/Art", "percentage": 50},
        {"skill": "Ancient wisdom research", "percentage": 50}
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

        // const colors = d3.scaleOrdinal(d3.schemeAccent)

        const path = d3.arc()
            .outerRadius(radius)
            .innerRadius(0);

        const grupos = g.selectAll("g")
            .data(pie(dataset))
            .enter()
            .append("g");

        grupos.append("path")
            .attr("d", path)
            .attr("fill", "#1a1a1a")
            .attr("stroke", "grey")
            .attr("stroke-width", "1")
            ;
            // .attr("fill", (d) => colors(d.data.percentage));

        grupos.append("text")
            .text((item) => item.data.skill)
            .attr("text-anchor", "middle")
            .attr("fill", "white")
            .attr("style","font-size: 12;")
            .attr("transform", (item) => `translate(${path.centroid(item)})`)
            ;
    });
</script>

<style lang="scss">
    @import "../styles/main.scss";

</style>

<svg id="graph"></svg>