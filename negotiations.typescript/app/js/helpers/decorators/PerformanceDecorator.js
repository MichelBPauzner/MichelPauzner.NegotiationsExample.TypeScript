System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function executionTimeLog(inSeconds = true) {
        return function (target, propertyKey, descriptor) {
            let unit = 's';
            let divider = 1000;
            if (!inSeconds) {
                unit = 'ms';
                divider = 1;
            }
            const method = descriptor.value;
            descriptor.value = function (...args) {
                console.log('-----------------');
                console.log(`Método: ${propertyKey}`);
                console.log(`Parâmetros passados: ${JSON.stringify(args)}`);
                const t1 = performance.now();
                const result = method.apply(this, args);
                const t2 = performance.now();
                console.log(`Retorno: ${JSON.stringify(result)}`);
                console.log(`Tempo de execução: ${(t2 - t1) / divider}${unit}.`);
                console.log('-----------------');
                return result;
            };
            return descriptor;
        };
    }
    exports_1("executionTimeLog", executionTimeLog);
    return {
        setters: [],
        execute: function () {
        }
    };
});
