import { readable, writable } from "svelte/store";

export let counterStore = writable(0);

export const todh = readable([
  {
    tags: [
        "Potencial", 
        "Unidad", 
        "Lo incognoscible",
        "Posibilidades",
        "Fuente",
        "Océano",
        "Caos",
        "Lo absoluto"
    ],
    description: "lwkdfnkerjnv erlkvj"
  },
  {
    tags: [
      "mónada",
      "punto",
      "pensar",
      "ser",
      "fuego",
      "orden",
      "discernir",
      "nigredo"
    ],
    description: ""
  },
  {
    tags: [
      "díada",
      "línea",
      "sentir",
      "dualidad",
      "agua",
      "incubar",
      "empatizar",
      "albedo"
    ]
  },
  {
    tags: [
      "tríada",
      "superficie",
      "decir",
      "símbolo",
      "aire",
      "conexión",
      "testear",
      "citrinitas"
    ]
  },
  {
    tags: [
      "tétrada",
      "objeto",
      "hacer",
      "estructura",
      "tierra",
      "forma",
      "prototipar",
      "rubedo"
    ]
  },
]);
