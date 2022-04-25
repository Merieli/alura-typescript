import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
} else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}

const botaoImporta = document.querySelector('#botao-importa');
if(botaoImporta) {
    botaoImporta.addEventListener('click', () => { //como não será trabalhado com event nem this nesse caso foi utilizada uma arrow function
        controller.importaDados();
    })
} else {
    throw Error('Botão importa não foi encontrado')
}