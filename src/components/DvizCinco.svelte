<script>
    import { onMount } from 'svelte';
    import * as d3 from 'd3';

    onMount(() => {

        let radius = 600;

        const svg = d3.select("#chart5").append("svg")
        .attr("width", radius)
        .attr("height", radius)
        .attr("id", "svg");

        const g = svg.append("g")
        .attr("transform", "translate(0,0)");

        const packLayout = d3.pack()
        .size([radius - 4, radius - 4])
        .padding(1.5);

        d3.json("./data/population.json").then(function (data) {

            let root = d3.hierarchy(data)
                .sum(d => d.population)
                .sort((a, b) => b.value - a.value);
            
            root = packLayout(root).descendants();

            let node = g.selectAll(".node")
                .data(root)
                .enter().append("g")
                .attr("class", d => d.children ? "node" : "leaf node")
                .attr("transform", d => `translate(${d.x},${d.y})`);
            
            node.append("circle")
                .attr("r", d => d.r);

            node.append("title")
                .text(d => `${d.data.name} ${(d.value)}`);
                
            node.filter(d => !d.children)
                .append("text")
                .attr("dy", "0.35em")
                .text(d => d.data.name.substring(0, d.r / 2));
        });
    });
</script>

<style lang="scss">
    /* @import "../styles/main.scss"; */
    /* circle {
        fill: white;
        fill-opacity: .25;
        stroke: black;
        stroke-width: 1px;
    }

    .leaf circle {
        fill: white;
        fill-opacity: 1;
    }

    text {
        font: 7px sans-serif;
        text-anchor: middle;
        cursor: pointer; cursor: hand
    } */
</style>

<!-- <svelte:window on:resize='{resize}'/> -->

<div id="chart5"></div>