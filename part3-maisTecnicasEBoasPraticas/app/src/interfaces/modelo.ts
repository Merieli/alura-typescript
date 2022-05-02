import { Imprimivel } from "../utils/imprimivel.js";
import { Comparavel } from "./comparavel.js";

//interface que extende mais interfaces, dessa forma gera a obrigatoriedade de implementação das interfaces Imprimivel e Comparavel ao utilizar a interface Modelo
export interface Modelo<T> extends Imprimivel, Comparavel<T> {

}