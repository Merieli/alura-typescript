import { NegociacaoController } from "./controllers/negociacao-controller.js";
//sempre é necessário na importação de um módulo com TypeScript inserir o ".js" após o nome do arquivo
const controller = new NegociacaoController;
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
