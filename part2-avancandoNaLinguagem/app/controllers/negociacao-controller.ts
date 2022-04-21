import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mesagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';

export class NegociacaoController {
    // usar o "| null" define que a propriedade pode ser do tipo HTMLInputElement ou null
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView', true);
    private mensagemView = new MensagemView('#mensagemView');

    constructor() {
        // casting explicito: "as HTMLInputElement" depois do trecho atribuido ou "<HTMLInputElement>" antes do trecho atribuido converte o valor para um tipo definido que é garantido para evitar erroa, forçando a mudança do tipo a partir do momento que ele é selecionado com o querySelector, para não gerar futuros problemas
        this.inputData = <HTMLInputElement>document.querySelector('#data'); 
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes); //quando a pagina for criada será feita a inserção da tabela
    }

    public adiciona(): void {
        // o método criaDe pode ser chamado a partir da classse sem a necessidade de criar uma instancia dela, devido ao modificador "static"
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value)
        if (!this.ehDiaUtil(negociacao.data)){ //condicional para testar se é dia util
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas')
            return;
        } 
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }

    private ehDiaUtil(date: Date){
        return date.getDay() > DiasDaSemana.DOMINGO && date.getDay() < DiasDaSemana.SABADO
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes); //a cada elemento adicionado na lista será feita uma nova inserção da tabela com os dados que forem adicionados
        this.mensagemView.update('Negociação adicionada com sucesos!');
    }
}
