export function throttleExecution(miliseconds = 500) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        
        const method = descriptor.value;
        let timer = 0;
        descriptor.value = function(...args: any[]) {
            if(event)
                event.preventDefault();
            clearInterval(timer);
            timer = setTimeout(() => method.apply(this, args), miliseconds);
        }
        return descriptor;
    }

}