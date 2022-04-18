import { Negociacao } from "./models/negociacao.js";

// em TS caso seja esquecido algum parametro, será apresentado um erro
const negociacao = new Negociacao(new Date(), 10, 100); 
console.log(negociacao.volume)
