// Passar após o nome da classe o "<T>" define que ao ser criada ela receberá um tipo genérico que pode ser variável e os métodos que tiverem o parâmetro de tipo "T" vão receber o mesmo tipo passado na classe. Mas com isso ao herdar essa classe que possui o <T> é necessário inserir na sua filha o tipo que ela irá receber passado entre "<>". 
//Também é possível determinar mais de um tipo genérico a ser passado para a classe pai usando "<T, K>" por exemplo, dessa forma quando o parametro for do tipo "T" terá um tipo e quando for "K" tera outro tipo. Lembrando que T ou K é um alias, então poderia ser utilizada qualquer outra letra desejada

// A classe view não pode ser instanciada pelo app porque sempre dependera de uma classe filha para gerar o template, por isso o modificador "abstract" define que não é possível criar uma instancia diretamente da classe
export abstract class View<T>{

    // No TS ao trabalhar com herança de classes e usar o modificado "protected" significa que apenas a classe pai tem acesso a propriedade, mas as classes filhas dela podem acessar a propriedade
    protected elemento: HTMLElement;
    private escapar: boolean = false;

    //inserir uma "?" após o nome do parametro, define que para o metodo ele é opcional, mas ao fazer isso é necessário definir dentro do método uma condicional que informe o que deve ser feito se o parametro for passado. Lembrando que somente os ultimos parametros de um método podem ser opcionais, porque somente os ultimos podem ser omitidos
    constructor(seletor: string, escapar?: boolean){
        //Dessa forma o seletor é armazenado em uma variavel, atribuindo um cache sem a necessidade do navegador buscar o elemento a todo momento
        const elemento = document.querySelector(seletor); //quando atribuido diretamente a uma variavel o TS reconhece "elemento" como o tipo "HTMLElement"
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else{
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique.`)
        }

        if(escapar){
            this.escapar = escapar; // se estiver sendo passado o parametro escapar ele atribui ao this.escapar o valor do parametro passado para o método
        }
    }

    public update(model: T): void {
        let template = this.template(model);
        if (this.escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/, ''); //regex que remove qualquer tag script da string que será inserida no DOM
        }

        this.elemento.innerHTML = template;
    }

    //todo método por padrão possui o modificador public

    protected abstract template(model: T): string; //O método criado com o modificador "abstract" define que será a classe filha que determinará seu comportamento e implementação

}