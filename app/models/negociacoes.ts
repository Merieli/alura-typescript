import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    // Array é um tipo genérico por isso é preciso passar entre "< >" qual o tipo do valor que ele irá receber
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    lista(): Array<Negociacao>{
        return this.negociacoes;
    }
}

