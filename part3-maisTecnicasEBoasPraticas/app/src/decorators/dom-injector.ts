// Decorator de propriedades:
//Decorator para definir uma variavel como um determinado elemento do DOM selecionado
export function domInjector(seletor: string){
    // decorator de propriedade não precisa do descriptor
    return function(target: any, propertyKey: string){ //propertyKey será a propriedade em que o decorator foi colocado
        console.log(`Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`);
        // Com o getter criado, toda vez que for chamada a propriedade que possui este decorator, terá a execução do getter para buscar o elemento do DOM em tempo de execução
        let elemento: HTMLElement;

        const getter = function(){ //function é usada ao invés de arrow function para que o this seja dinamico
            //Usando o escopo de funções para adicionar cache ao elemento "faz com que não seja necessário buscar a cada execução o mesmo elemento no DOM":
            if(!elemento) {
                elemento = <HTMLElement>document.querySelector(seletor);
                console.log(`buscado elemento do DOM com o seletor ${seletor} para injetar em ${propertyKey}`)
            }
            
            return elemento;
        }

        // reatribui ao get o getter criado:
        Object.defineProperty(target, propertyKey, { get: getter })
    }
}