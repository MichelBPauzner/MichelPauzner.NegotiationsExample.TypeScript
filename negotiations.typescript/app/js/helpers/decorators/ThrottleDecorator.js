System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function throttleExecution(miliseconds = 500) {
        return function (target, propertyKey, descriptor) {
            const method = descriptor.value;
            let timer = 0;
            descriptor.value = function (...args) {
                if (event)
                    event.preventDefault();
                clearInterval(timer);
                timer = setTimeout(() => method.apply(this, args), miliseconds);
            };
            return descriptor;
        };
    }
    exports_1("throttleExecution", throttleExecution);
    return {
        setters: [],
        execute: function () {
        }
    };
});
