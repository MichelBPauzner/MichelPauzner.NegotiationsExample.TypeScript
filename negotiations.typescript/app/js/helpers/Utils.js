System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function printLog(...objects) {
        objects.forEach(obj => obj.toString());
    }
    exports_1("printLog", printLog);
    return {
        setters: [],
        execute: function () {
        }
    };
});
