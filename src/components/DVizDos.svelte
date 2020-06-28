<script>
    // import { tree, hierarchy, path } from "d3";
    import {
        onMount
    } from 'svelte';
    var data = {
        "name": "Max",
        "children": [{
                "name": "Carlos",
                "children": [{
                        "name": "Carla"
                    },
                    {
                        "name": "Eusebio"
                    },
                    {
                        "name": "Alicia"
                    }
                ]
            },
            {
                "name": "Joana",
                "children": [{
                        "name": "Cristina"
                    },
                    {
                        "name": "Julián"
                    },
                    {
                        "name": "Recaredo"
                    }
                ]
            }
        ]
    };

    // const svg = d3.select("svg"),
    //     width = +svg.attr("width"), // La anotación con + extrae
    //     height = +svg.attr("height"), // el valor del atributo
    //     g = svg.append("g").attr("transform", "translate(0,40)");

    // // Parseamos los diccionarios anidados y extraemos el nodo padre
    // const root = d3.hierarchy(data)

    // // Creamos un layout de árbol
    // const tree = d3.tree().size([width - 30, height - 160]);
    // tree(root); // Insertamos la jerarquía en el árbol

    // // Creamos los enlaces entre los elementos
    // const link = g.selectAll(".link")
    //     .data(root.links()) // Pasamos como dato los enlaces pade-hijo
    //     .enter().append("line") // Para cada enlace una linea...
    //     .attr("class", "link")
    //     .attr("stroke-width", "2px")
    //     .attr("stroke", "#ddd")
    //     .attr("x1", function (d) {
    //         return d.source.x;
    //     })
    //     .attr("y1", function (d) {
    //         return d.source.y;
    //     })
    //     .attr("x2", function (d) {
    //         return d.target.x;
    //     })
    //     .attr("y2", function (d) {
    //         return d.target.y;
    //     });

    // // Creamos nodos para los elementos del árbol
    // const node = g.selectAll(".node")
    //     .data(root.descendants()) // Accedemos a los descendientes del árbol
    //     .enter()
    //     .append("g") // Para cada nodo creamos un grupo
    //     .attr("transform", function (d) {
    //         return "translate(" + d.x + "," + d.y + ")";
    //     })

    // // En cada nodo añadimos lo que queramos
    // node.append("circle")
    //     .attr("r", 2.5);

    // node.append("text")
    //     .text(function (d) {
    //         return d.data.name
    //     });
        
    onMount(() => {

      
    });
    
</script>

<svg width="600" height="600"></svg>