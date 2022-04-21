import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes(); // quando o valor é atribuido inicialmente a variavel não é nessário tipá-lo pois o TS infere o tipo automaticamente
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    //método:
    adiciona() {
        const negociacao = this.criaNegociacao();
        negociacao.data.setDate(12);
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limparFormulario();
    }
    criaNegociacao() {
        const exp = /-/g; // ao atribuir uma regex a variavel o TS reconhece automaticamente e permite usar os métodos de REGES nele
        const date = new Date(this.inputData.value.replace(exp, ',')); //este replace converte a string do inputData de "11-12-2022" para "11,12,2022"
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus(); //o TS reconhece que inputData é um elemento do DOM e permite os métodos disponíveis para eleS
    }
}
