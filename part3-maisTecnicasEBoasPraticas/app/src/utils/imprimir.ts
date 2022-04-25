import { Imprimivel } from "./imprimivel.js";
// Polimorfismo: capacidade de um objeto ser referenciado de multiplas formas
export function imprimir(...objetos: Imprimivel[]) {
    for (let objeto of objetos) {
        console.log(objeto.paraTexto())
    }
}