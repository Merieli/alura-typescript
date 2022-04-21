// o "enum" é um método TS que por padrão é somente leitura e enumera suas variaveis constantes atribuindo a elas um valor equivalente ao seu indice começado por 0, e para chamar os métodos da classe enum em outra classe basta usar "NomeClaseEnum.nomeElemento"

//Mas para evitar erros é recomendável, e uma boa prática atribuir dentro da enum os valores de cada constante, dessa forma se algum programador mudar a ordem de declaração dos dentro da Enum o seu valor não será alterado

//Na enum ao modificar o valor de alguma constante, os próximos valores passarão a contar a partir do novo valor de 1 em 1.
export enum DiasDaSemana {
    DOMINGO = 0,
    SEGUNDA = 1,
    TERCA = 2,
    QUARTA = 3,
    QUINTA = 4,
    SEXTA = 5,
    SABADO = 6
}