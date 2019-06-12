System.register(["../models/modelBarrel", "../views/viewBarrel", "../helpers/decorators/decoratorBarrel", "../services/serviceBarrel", "../helpers/helperBarrel"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __moduleName = context_1 && context_1.id;
    var modelBarrel_1, viewBarrel_1, decoratorBarrel_1, serviceBarrel_1, helperBarrel_1, NegotiationController, WeekDay;
    return {
        setters: [
            function (modelBarrel_1_1) {
                modelBarrel_1 = modelBarrel_1_1;
            },
            function (viewBarrel_1_1) {
                viewBarrel_1 = viewBarrel_1_1;
            },
            function (decoratorBarrel_1_1) {
                decoratorBarrel_1 = decoratorBarrel_1_1;
            },
            function (serviceBarrel_1_1) {
                serviceBarrel_1 = serviceBarrel_1_1;
            },
            function (helperBarrel_1_1) {
                helperBarrel_1 = helperBarrel_1_1;
            }
        ],
        execute: function () {
            NegotiationController = class NegotiationController {
                constructor() {
                    this._negotiations = new modelBarrel_1.Negotiations();
                    this._negotiationsView = new viewBarrel_1.NegotiationsView('#negociacoesView');
                    this._messageView = new viewBarrel_1.MessageView('#mensagemView');
                    this._service = new serviceBarrel_1.NegotiationService();
                    this._negotiationsView.update(this._negotiations);
                }
                add(event) {
                    let date = new Date(this._inputDate.val().replace(/-/g, ','));
                    if (!this._canAddNegotiation(date)) {
                        this._messageView.update("Só é possível realizar uma negociação em dias úteis.");
                        return;
                    }
                    const neg = new modelBarrel_1.Negotiation(date, parseInt(this._inputQuantity.val()), parseFloat(this._inputValue.val()));
                    this._negotiations.add(neg);
                    helperBarrel_1.printLog(neg, this._negotiations);
                    this._negotiationsView.update(this._negotiations);
                    this._messageView.update("Negociação adicionada com sucesso!");
                }
                _canAddNegotiation(date) {
                    return date.getDay() != WeekDay.Sunday && date.getDay() != WeekDay.Saturday;
                }
                importFromAPI() {
                    return __awaiter(this, void 0, void 0, function* () {
                        try {
                            const negotiations = yield this._service.getNegotiations(res => {
                                if (res.ok) {
                                    return res;
                                }
                                else {
                                    throw new Error(res.statusText);
                                }
                            });
                            const negotiationsAlreadyAdded = this._negotiations.toArray();
                            negotiations
                                .filter(n => !negotiationsAlreadyAdded.some(naa => n.equals(naa)))
                                .forEach(negotiation => this._negotiations.add(negotiation));
                            this._negotiationsView.update(this._negotiations);
                        }
                        catch (err) {
                            this._messageView.update(err.message);
                        }
                    });
                }
            };
            __decorate([
                decoratorBarrel_1.domInject('#data')
            ], NegotiationController.prototype, "_inputDate", void 0);
            __decorate([
                decoratorBarrel_1.domInject('#quantidade')
            ], NegotiationController.prototype, "_inputQuantity", void 0);
            __decorate([
                decoratorBarrel_1.domInject('#valor')
            ], NegotiationController.prototype, "_inputValue", void 0);
            __decorate([
                decoratorBarrel_1.throttleExecution(200)
            ], NegotiationController.prototype, "add", null);
            __decorate([
                decoratorBarrel_1.throttleExecution()
            ], NegotiationController.prototype, "importFromAPI", null);
            exports_1("NegotiationController", NegotiationController);
            (function (WeekDay) {
                WeekDay[WeekDay["Sunday"] = 0] = "Sunday";
                WeekDay[WeekDay["Monday"] = 1] = "Monday";
                WeekDay[WeekDay["Tuesday"] = 2] = "Tuesday";
                WeekDay[WeekDay["Wednesday"] = 3] = "Wednesday";
                WeekDay[WeekDay["Thursday"] = 4] = "Thursday";
                WeekDay[WeekDay["Friday"] = 5] = "Friday";
                WeekDay[WeekDay["Saturday"] = 6] = "Saturday";
            })(WeekDay || (WeekDay = {}));
        }
    };
});
