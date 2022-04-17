/* Com Vanilla JS */
import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 10 , 100); // esquecer de passar a quantidade de parametros necessários, passando por exemplo apenas 1 único parametrom também pode gerar problemas

// console.log(negociacao)
//ao tentar alterar devido a propriedade ser privada o valor de #quantidade não sofre mudanças e permanece o mesmo, mas é adicionado dinamicamente outra propriedade sem o "#" que possui o valor de 1000
//negociacao.quantidade = 1000 

//negociacao.quantidad = 40 //ao usar uma propriedade de nome diferente o JS irá adicionar ela dinamicamente dentro da classe, podendo gerar confusões e problemas

console.log(negociacao.volume)
