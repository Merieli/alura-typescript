// o "enum" é um método TS que por padrão é somente leitura e enumera suas variaveis constantes atribuindo a elas um valor equivalente ao seu indice começado por 0, e para chamar os métodos da classe enum em outra classe basta usar "NomeClaseEnum.nomeElemento"
//Mas para evitar erros é recomendável, e uma boa prática atribuir dentro da enum os valores de cada constante, dessa forma se algum programador mudar a ordem de declaração dos dentro da Enum o seu valor não será alterado
//Na enum ao modificar o valor de alguma constante, os próximos valores passarão a contar a partir do novo valor de 1 em 1.
export var DiasDaSemana;
(function (DiasDaSemana) {
    DiasDaSemana[DiasDaSemana["DOMINGO"] = 0] = "DOMINGO";
    DiasDaSemana[DiasDaSemana["SEGUNDA"] = 1] = "SEGUNDA";
    DiasDaSemana[DiasDaSemana["TERCA"] = 2] = "TERCA";
    DiasDaSemana[DiasDaSemana["QUARTA"] = 3] = "QUARTA";
    DiasDaSemana[DiasDaSemana["QUINTA"] = 4] = "QUINTA";
    DiasDaSemana[DiasDaSemana["SEXTA"] = 5] = "SEXTA";
    DiasDaSemana[DiasDaSemana["SABADO"] = 6] = "SABADO";
})(DiasDaSemana || (DiasDaSemana = {}));
