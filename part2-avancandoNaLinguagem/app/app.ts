import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController();
//todo querySelector para o TS pode ser HTMLElement ou null, se o elemento selecionado não existir
const form = document.querySelector('.form');
if(form){ //nos casos em que o valor da variavel também pode ser "null" a simples testagem com uma condicional, faz com que o TS reconheça automaticamente que a variavel não será considerada se for null e para de mostrar erro
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
} else{
    throw Error('Não foi possível iniciar a aplicação. Verifique se o form existe')
}

