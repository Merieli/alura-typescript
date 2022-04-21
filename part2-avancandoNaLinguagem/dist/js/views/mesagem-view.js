import { View } from "./view.js";
export class MensagemView extends View {
    //Se o método template não for protected, ele fica exposto e pode ser sugerido para uso ao criar esta classe, o que não pode ocorrer porque o template dela é fixo
    template(model) {
        return `
        <p class="alert alert-info">${model}</p>
        `;
    }
}
