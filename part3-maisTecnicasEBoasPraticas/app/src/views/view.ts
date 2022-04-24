import { inspect } from "../decorators/inspect.js";
import { LogarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T> {

    protected elemento: HTMLElement;

    constructor(seletor: string) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique`);
        }
    }

    //Com decorators a ordem de execução é de cima para baixo, mas ao modificar a classe em que o decorator está aplicado, é aplicada a modificação no método na ordem de baixo para cima
    //@inspect //como inspect não possui a função de recebimento de parametros, ela não precisa ser chamada e os "()" devem ser removidos
    //@LogarTempoDeExecucao(true)
    public update(model: T): void {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}