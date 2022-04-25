import { Comparavel } from '../interfaces/comparavel.js';
import { Imprimivel } from '../utils/imprimivel.js';
import { Negociacao } from './negociacao.js';

//uma classe pode ter apenas uma herança, mas pode ter ilimitadas interfaces
export class Negociacoes implements Imprimivel, Comparavel<Negociacoes> {
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

    public paraTexto(): string {
        return JSON.stringify(this.negociacoes, null, 2);
    }

    public ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());
    }
}
