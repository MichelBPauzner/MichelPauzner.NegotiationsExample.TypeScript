export function domInject(selector: string) {
    return function(target: any, propertyKey: string) {
        let element: JQuery;

        const getter = function(){
            if(!element){
                console.log(`Injetando o elemento DOM: ${selector} à propriedade: ${propertyKey} com LazyLoading.`);
                element = $(selector);
            }
            return element;
        }

        Object.defineProperty(target, propertyKey, { 
            get: getter
        });
    }
}