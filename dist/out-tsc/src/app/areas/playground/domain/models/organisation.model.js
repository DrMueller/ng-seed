"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var object_creation_1 = require("app/infrastructure/core-services/object-creation");
var individual_model_1 = require("./individual.model");
var Organisation = /** @class */ (function () {
    function Organisation() {
        this.individual = undefined;
        this.individuals = undefined;
        this.coName = undefined;
        this.name = undefined;
    }
    __decorate([
        object_creation_1.ConstructableProperty(individual_model_1.Individual),
        __metadata("design:type", Object)
    ], Organisation.prototype, "individual", void 0);
    __decorate([
        object_creation_1.ConstructableProperty(individual_model_1.Individual),
        __metadata("design:type", Object)
    ], Organisation.prototype, "individuals", void 0);
    return Organisation;
}());
exports.Organisation = Organisation;
//# sourceMappingURL=organisation.model.js.map