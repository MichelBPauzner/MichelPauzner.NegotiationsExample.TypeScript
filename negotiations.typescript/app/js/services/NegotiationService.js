System.register(["../models/modelBarrel"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var modelBarrel_1, NegotiationService;
    return {
        setters: [
            function (modelBarrel_1_1) {
                modelBarrel_1 = modelBarrel_1_1;
            }
        ],
        execute: function () {
            NegotiationService = class NegotiationService {
                getNegotiations(handler) {
                    return fetch('http://localhost:8080/dados')
                        .then(res => handler(res))
                        .then(res => res.json())
                        .then((data) => data.map(info => new modelBarrel_1.Negotiation(new Date(), info.vezes, info.montante)))
                        .catch(err => {
                        console.log(err);
                        throw new Error('Não foi possível importar as negociações da API.');
                    });
                }
            };
            exports_1("NegotiationService", NegotiationService);
        }
    };
});
