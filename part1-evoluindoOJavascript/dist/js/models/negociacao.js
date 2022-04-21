export class Negociacao {
    // campos de classe privados possuem "private" na frente e dessa forma não podem ser modificados fora da sua classe
    //private qualquer = 'teste' //também posso ter propriedades fora do construtor
    // no TS se no construtor da classe houver o "private ou public" nos parametros passados, automaticamente ele cria uma propriedade para classe com as especificações e tipos determinados
    constructor(
    //depois da negociacao ter sido criada a propriedade é publica "todos tem acesso" mas somente para leitura
    _data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    // ! O readonly deve ser usado com cuidado porque ele apenas não permite a reatribuição dos valores, mas ao tentar modificar uma propriedade com métodos próprios do seu tipo ela será alterada
    // pro ts o get também é readonly
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        // Técnica de Programação defensiva: Dentro do get reatribuir a propriedade a uma variável protege a referência original de modificações, e quando houver a tentativa de alterações da propriedade por um método a referência original não será modificada
        const data = new Date(this._data.getTime()); //data recebe o mesmo valor de _data pegando pelo getTime()
        return data;
    }
}
