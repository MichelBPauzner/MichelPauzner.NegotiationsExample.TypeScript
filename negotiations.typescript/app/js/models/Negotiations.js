System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negotiations;
    return {
        setters: [],
        execute: function () {
            Negotiations = class Negotiations {
                constructor() {
                    this._negotiations = [];
                }
                add(negociacao) {
                    this._negotiations.push(negociacao);
                }
                toArray() {
                    return [].concat(this._negotiations);
                }
                toString() {
                    console.log('-- toString --');
                    console.log(JSON.stringify(this._negotiations));
                }
                equals(negotiations) {
                    return JSON.stringify(this._negotiations) == JSON.stringify(negotiations.toArray());
                }
            };
            exports_1("Negotiations", Negotiations);
        }
    };
});
