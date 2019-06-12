System.register(["../helpers/decorators/decoratorBarrel"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var decoratorBarrel_1, View;
    return {
        setters: [
            function (decoratorBarrel_1_1) {
                decoratorBarrel_1 = decoratorBarrel_1_1;
            }
        ],
        execute: function () {
            View = class View {
                constructor(selector, _escape = false) {
                    this._escape = _escape;
                    this._element = $(selector);
                }
                update(model) {
                    let template = this.template(model);
                    if (this._escape) {
                        template = template.replace(/<script>[\s\S]*?<\/script>/, '');
                    }
                    this._element.html(this.template(model));
                }
            };
            __decorate([
                decoratorBarrel_1.executionTimeLog()
            ], View.prototype, "update", null);
            exports_1("View", View);
        }
    };
});
