// Passar após o nome da classe o "<T>" define que ao ser criada ela receberá um tipo genérico que pode ser variável e os métodos que tiverem o parâmetro de tipo "T" vão receber o mesmo tipo passado na classe. Mas com isso ao herdar essa classe que possui o <T> é necessário inserir na sua filha o tipo que ela irá receber passado entre "<>". 
//Também é possível determinar mais de um tipo genérico a ser passado para a classe pai usando "<T, K>" por exemplo, dessa forma quando o parametro for do tipo "T" terá um tipo e quando for "K" tera outro tipo. Lembrando que T ou K é um alias, então poderia ser utilizada qualquer outra letra desejada
// A classe view não pode ser instanciada pelo app porque sempre dependera de uma classe filha para gerar o template, por isso o modificador "abstract" define que não é possível criar uma instancia diretamente da classe
export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor); //Dessa forma o seletor é armazenado em uma variavel, atribuisndo um cache sem a necessidade do navegador buscar o elemento a todo momento
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
