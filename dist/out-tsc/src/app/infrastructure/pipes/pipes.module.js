"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var pipes = require("./pipes");
var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        core_1.NgModule({
            exports: [
                pipes.SafeHtmlPipe
            ],
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                pipes.SafeHtmlPipe
            ]
        })
    ], PipesModule);
    return PipesModule;
}());
exports.PipesModule = PipesModule;
//# sourceMappingURL=pipes.module.js.map