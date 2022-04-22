//Decorator: é uma função TS, para requisitos não funcionais da aplicação (como testes de performance), que precisa retornar uma função que tem como parametro o "target" (que em um método estatico é a função construtora da classe, e em um método que não seja estático retorna o prototype da classe),  o "propertyKey" (fornece o nome do método em formato string que foi decorado), e o "descriptor" (que conhece detalhes do método que se deseja modificar, possuindo referencia pro método original)
export function LogarTempoDeExecucao() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const metodoOriginal = descriptor.value;
        //descriptor.value = function(...args: Array<any>) { //transforma qualquer quantidade de parametros passado em array, também é possível fazer o mesmo da forma abaixo:
        descriptor.value = function(...args: any[]) { //essa função sobrescreve o método original
            //teste de performance com o método "performance" disponibilizado pelo Navegador usando o "now":
            const t1 = performance.now();

            const retorno = metodoOriginal.apply(this, args); //o apply() permite passar um contexto pro metodoOriginal com um array de parametros, dessa forma o  metodoOriginal será executado no contexto de "this" da função atual tendo como parametro os argumentos pasados por parametro na função atual

            const t2 = performance.now();
            // Calculo do tempo de performance em milisegundos:
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / 1000} segundos`)

            retorno
        };
        return descriptor;
    }
}

//para chamar o decorator usar o "@" e depois o nome da função decorator, ficando da seguinte forma: @FuncaoDecoratorX()