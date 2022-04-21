export class Negociacoes {
    constructor() {
        // Array é um tipo genérico por isso é preciso passar entre "< >" qual o tipo do valor que ele irá receber
        //private negociacoes: Array<Negociacao> = [];
        // Um atalho para o tipo genérico "Array<>" é usar o "[]" na frente do nome do tipo específico, como abaixo
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //Para que a lista usada não aponte para a mesma referencia na memoria em negociacoes e permita alterá-la é preciso usar o tipo "ReadonlyArray" que permite somente a leitura da lista, e bloqueia qualquer operação de modificação ou inclusão na lista atual
    //lista(): ReadonlyArray<Negociacao>{
    //Um atalho para o tipo genérico "ReadonlyArray<>" é usar antes do nome do tipo específico o modificador "readonly" e na frente do nome o "[]", como abaixo
    lista() {
        return this.negociacoes;
    }
}
