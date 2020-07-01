<script>
    import { onMount } from 'svelte';
    import * as d3 from 'd3';

    onMount(() => {

        let radius = 450;

        const svg = d3.select("#chart5").append("svg")
        .attr("id", "svg");

        d3.select("#svg")
        .attr("version", "1.1")
        .attr("viewBox", `0 0 ${radius} ${radius}`)
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("style","width:100%; height:auto;");

        const g = svg.append("g")
        .attr("transform", "translate(0,0)")
        .attr("fill","none")
        ;

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
                .attr("transform", d => `translate(${d.x+1},${d.y+1})`);
                
                node.append("circle")
                .attr("r", d => d.r)
                .attr("stroke", "white")
                .attr("stroke-width", "1")
                .attr("fill","none");

            node.append("title")
                .text(d => `${d.data.name} ${(d.value)}`);
                
            node.filter(d => !d.children)
                .append("text")
                .attr("dy", "0.35em")
                .text(d => d.data.name.substring(0, d.r / 2))
                .attr("style","font-size:10px; text-anchor:middle; text-transform: uppercase;")
                .attr("fill","grey")
                .attr("stroke-width","0")
                ;
        });
    });
</script>

<style lang="scss">
    .svg-content-responsive {
        width: 100%;
    }
    /* @import "../styles/main.scss"; */
    /* #chart5 {
        height: 0;
        padding-top: 48%;
        position: relative;
    } */
    /* .svg--responsive {
        position: absolute;
        top: 0;
        left: 0;
    } */
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