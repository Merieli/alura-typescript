import { View } from "./view.js";

export class MensagemView extends View<string>{
    //Se o método template não for protected, ele fica exposto e pode ser sugerido para uso ao criar esta classe, o que não pode ocorrer porque o template dela é fixo
    protected template(model: string): string {
        return `
        <p class="alert alert-info">${model}</p>
        `
    }
}