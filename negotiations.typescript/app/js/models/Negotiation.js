System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negotiation;
    return {
        setters: [],
        execute: function () {
            Negotiation = class Negotiation {
                constructor(date, quantity, value) {
                    this.date = date;
                    this.quantity = quantity;
                    this.value = value;
                }
                get volume() {
                    return this.quantity * this.value;
                }
                toString() {
                    console.log('-- toString --');
                    console.log(`Data: ${this.date}
             Quantidade: ${this.quantity}, 
             Valor: ${this.value}, 
             Volume: ${this.volume}`);
                }
                equals(negotiation) {
                    return this.date.getDate() == negotiation.date.getDate()
                        && this.date.getMonth() == negotiation.date.getMonth()
                        && this.date.getFullYear() == negotiation.date.getFullYear();
                }
            };
            exports_1("Negotiation", Negotiation);
        }
    };
});
