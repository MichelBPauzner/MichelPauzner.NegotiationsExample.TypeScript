export function executionTimeLog(inSeconds: boolean = true) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        let unit = 's';
        let divider = 1000;

        if(!inSeconds){
            unit = 'ms';
            divider = 1;
        }
        
        const method = descriptor.value;

        descriptor.value = function(...args: any[]) {
            console.log('-----------------');
            console.log(`Método: ${propertyKey}`);
            console.log(`Parâmetros passados: ${JSON.stringify(args)}`);
            const t1 = performance.now();
            const result = method.apply(this, args);
            const t2 = performance.now();
            console.log(`Retorno: ${JSON.stringify(result)}`);
            console.log(`Tempo de execução: ${(t2-t1)/divider}${unit}.`);
            console.log('-----------------');
            return result;

        }
        return descriptor;

    }

}