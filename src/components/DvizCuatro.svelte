<script>
    import { onMount } from 'svelte';
    import * as d3 from 'd3';

    const dataset = [
        {"child": "TODH", "parent": ""},
        {"child": "Pensar", "parent": "TODH"},
        {"child": "Sentir", "parent": "TODH"},
        {"child": "Decir", "parent": "TODH"},
        {"child": "Hacer", "parent": "TODH"},
        {"child": "2", "parent": "Sentir"},
        {"child": "3", "parent": "Decir"},
        {"child": "Vínculo", "parent": "Decir"},
        {"child": "4", "parent": "Hacer"},
        {"child": "Acción", "parent": "Hacer"},
        {"child": "1", "parent": "Pensar"},
        {"child": "Ser", "parent": "Pensar"},
        {"child": "Intuición", "parent": "Pensar"},
    ]

    onMount(() => {
        const svgWidth = 500;
        const svgHeight = 300;

        const svg = d3.select("#graph2")
            .attr("width", svgWidth)
            .attr("height", svgHeight)
            .append("g").attr("transform","translate(50,50)");

        const dataStructure = d3.stratify()
            .id(function(d){return d.child;})
            .parentId((d) => d.parent)
            (dataset);

        const treeStructure = d3.tree().size([400,200]);
        const information = treeStructure(dataStructure)

        // console.log(information.descendants());
        // console.log(information.links());

        const circles = svg.append("g").selectAll("circle")
                .data(information.descendants());
        circles.enter().append("circle")
            .attr("cx", function(d) { return d.x;})
            .attr("cy", function(d) { return d.y;})
            .attr("r", 4)
            .attr("fill","grey");

        const connections = svg.append("g").selectAll("path")
            .data(information.links());
        connections.enter().append("path")
            .attr("d",function(d){
                return "M" + d.source.x + "," + d.source.y + "C" + d.source.x + "," + (d.source.y + d.target.y)/2 + " " + d.target.x + "," + (d.source.y + d.target.y)/2 + " " + d.target.x + "," + d.target.y;
            })
            .attr("stroke-width",1)
            .attr("stroke","grey")
            .attr("fill","none")

        const names = svg.append("g").selectAll("text")
            .data(information.descendants());
        names.enter().append("text")
            .text(function(d){return d.data.child;})
            .attr("x", function(d){return d.x+8;})
            .attr("y", function(d){return d.y+3;})
            .attr("fill","white")
            .attr("font-size","10");

    });
</script>

<style>
    /* @import "../styles/main.scss"; */
    .svg-container {
        background-color: red;
        margin-left: auto;
        margin-right: auto;
    }
    circle {
        fill: blue;
    }
    path {
        fill: none;
        stroke: white;
    }
</style>
<svg id="graph2"></svg>