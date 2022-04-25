// Interface no TS: Pode ser usada para definir a forma que desejo para um determinado dado obtido a partir de uma API por exemplo, o que facilita o autocomplete e identificação de falhas no código. Uma interface não é uma classe, então instancias não podem ser criadas a partir dela, nem podem ser atribuidos valores a partir dela. 

export interface NegociacoesDoDia {
    //esta interface possui as propriedades listadas abaixo com seus respectivos tipos.
    montante: number;
    vezes: number;
    //caso o nome do parametro vindo da API seja alterado, o backend deve avisar o Front, e para modificá-lo basta vir na interface, clicar com o botão direito do mouse sobre o parametro a alterar > Clicar em "Rename Symbol" > escrever o nome do novo parametro > ENTER. Dessa forma será renomeado em todo o codigo onde houver o parametro para o seu novo nome.
}