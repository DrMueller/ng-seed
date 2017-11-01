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
var address_model_1 = require("./address.model");
var Individual = /** @class */ (function () {
    function Individual() {
        this.address2 = undefined;
        this.address = undefined;
        this.firstName = undefined;
        this.id = undefined;
        this.lastName = undefined;
    }
    Object.defineProperty(Individual.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: true,
        configurable: true
    });
    Individual.createSome = function () {
        var result = [
            {
                id: 'b321',
                firstName: 'Matthias',
                lastName: 'Müller'
            },
            {
                id: 'a123',
                firstName: 'Patrick',
                lastName: 'Stewart'
            },
            {
                id: 'c567',
                firstName: 'Stefanie',
                lastName: 'Heinzmann'
            }
        ];
        return result;
    };
    __decorate([
        object_creation_1.ConstructableProperty(address_model_1.Address),
        __metadata("design:type", Object)
    ], Individual.prototype, "address2", void 0);
    __decorate([
        object_creation_1.ConstructableProperty(address_model_1.Address),
        __metadata("design:type", Object)
    ], Individual.prototype, "address", void 0);
    return Individual;
}());
exports.Individual = Individual;
//# sourceMappingURL=individual.model.js.map