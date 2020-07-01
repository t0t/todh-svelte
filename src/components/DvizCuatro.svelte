<script>
    import { onMount } from 'svelte';
    import * as d3 from 'd3';

    const dataset = [
        {"child": "Origen", "parent": ""},
        {"child": "Pensar", "parent": "Origen"},
        {"child": "Sentir", "parent": "Origen"},
        {"child": "Decir", "parent": "Origen"},
        {"child": "Hacer", "parent": "Origen"},
        {"child": "Ser", "parent": "Fuego"},
        {"child": "Idear", "parent": "Ser"},
        {"child": "2", "parent": "Sentir"},
        {"child": "Agua", "parent": "Sentir"},
        {"child": "Empatía", "parent": "Agua"},
        {"child": "Escuchar", "parent": "Empatía"},
        {"child": "Analogía", "parent": "Aire"},
        {"child": "Tests", "parent": "Analogía"},
        {"child": "4", "parent": "Hacer"},
        {"child": "3", "parent": "Decir"},
        {"child": "Aire", "parent": "Decir"},
        {"child": "Tierra", "parent": "Hacer"},
        {"child": "Experiencia", "parent": "Tierra"},
        {"child": "Prototipar", "parent": "Experiencia"},
        {"child": "1", "parent": "Pensar"},
        {"child": "Fuego", "parent": "Pensar"},
    ]

    onMount(() => {
        const svgWidth = 500;
        const svgHeight = 500;

        const svg = d3.select("#graph2")
            .attr("version", "1.1")
            .attr("viewBox", `0 0 ${svgWidth} ${svgHeight}`)
            .attr("preserveAspectRatio", "none")
            .attr("style","width:100%; height:auto;")
            .append("g").attr("transform","translate(50,50)");

        const dataStructure = d3.stratify()
            .id(function(d){return d.child;})
            .parentId((d) => d.parent)
            (dataset);

        const treeStructure = d3.tree().size([370,400]);
        const information = treeStructure(dataStructure)

        // console.log(information.descendants());
        // console.log(information.links());

        const circles = svg.append("g").selectAll("circle")
                .data(information.descendants());

        circles.enter().append("circle")
            .attr("cx", function(d) { return d.x;})
            .attr("cy", function(d) { return d.y;})
            .attr("r", 4)
            .attr("fill","black");

        const connections = svg.append("g").selectAll("path")
            .data(information.links());

        connections.enter().append("path")
            .attr("d",function(d){
                return "M" + d.source.x + "," + d.source.y + "C" + d.source.x + "," + (d.source.y + d.target.y)/2 + " " + d.target.x + "," + (d.source.y + d.target.y)/2 + " " + d.target.x + "," + d.target.y;
            })
            .attr("stroke-width",1)
            .attr("stroke","black")
            .attr("fill","none")

        const names = svg.append("g").selectAll("text")
            .data(information.descendants());

        names.enter().append("text")
            .text(function(d){return d.data.child;})
            .attr("x", function(d){return d.x+10;})
            .attr("y", function(d){return d.y+2;})
            .attr("fill","black")
            .attr("style","font-size:8; text-transform: uppercase;")
            ;
    });
</script>

<style>
    /* @import "../styles/main.scss"; */
    /* .svg-container {
        margin-left: auto;
        margin-right: auto;
    }
    circle {
        fill: blue;
    }
    path {
        fill: none;
        stroke: white;
    } */
</style>
<svg id="graph2"></svg>