import { readable } from "svelte/store";

export let codeBlocks = readable([
    {
        code_javascript: `let multiplicar = function(x) { 
            return x * x * x;
        }
        
        map(multiplicar, [0, 1, 2, 5, 10]);
        `,
        code_json: `{
            "id": 3,
            "slug": "el-proceso-de-la-incursion",
            "title": "El proceso de la incursión",
            "subtitle": "Otro acercamiento a lo que es TODH",
            "imagen": "img/grafico-7.svg",
            "thumb": "img/th-grafico-7.svg",
            "excerpt": "Lo que hacemos, sentimos, decimos y pensamos es la misma cosa.",
            "content": {
                "h1": "Todo es lo mismo",
                "img1": "img/grafico-8.svg",
                "img2": "img/grafico-5.svg",
        }`,
        code_markup: `<head>...</head>
        <body>
            <header>
                <nav></nav>
            </header>
            <main>
...
            </main>
            <aside>...</aside>
            <footer>...</footer>
        </body>`,
        code_scss: `// Preprocesado de CSS con Sass
        $size-scales: (
          -2: $h-1,
          -1: $h0,
          0: $h1, // 1rem
          1: $h2, // 1.618rem
        );
        @function font-scale($level) {
          @return map-get($size-scales, $level);
        }`,
        code_default: `let message = "Cosmos";
        .helloCosmos {
            background-color: black;
        }
        <p class="helloCosmos">
            Hello { message }!
        </p>`
    },
    {
        code_javascript: "codigo js",
        code_json: "codigo json"
    }
  ]);
