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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var validator_provider_factory_1 = require("../provisioning/validator-provider-factory");
var v = require("./validator-implementations");
var ValidatorFactoryService = /** @class */ (function () {
    function ValidatorFactoryService(validators) {
        this.validators = validators;
    }
    ValidatorFactoryService.prototype.minLength = function (minLength) {
        return this.getByKey(v.MinLengthValidator.key, minLength);
    };
    ValidatorFactoryService.prototype.stringMatch = function (match) {
        return this.getByKey(v.StringMatchValidator.key, match);
    };
    ValidatorFactoryService.prototype.patternMatch = function (pattern) {
        return this.getByKey(v.PatternValidator.key, pattern);
    };
    ValidatorFactoryService.prototype.required = function () {
        return this.getByKey(v.RequiredValidator.key);
    };
    ValidatorFactoryService.prototype.getByKey = function (key) {
        var funcArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            funcArgs[_i - 1] = arguments[_i];
        }
        var result = this.validators.find(function (f) { return f.key === key; });
        if (!result) {
            throw Error("Validator with Key " + key + " not found.");
        }
        result.initialize.apply(result, funcArgs);
        return result;
    };
    ValidatorFactoryService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(validator_provider_factory_1.ValidatorProviderFactory.APP_VALIDATOR_TOKEN)),
        __metadata("design:paramtypes", [Array])
    ], ValidatorFactoryService);
    return ValidatorFactoryService;
}());
exports.ValidatorFactoryService = ValidatorFactoryService;
//# sourceMappingURL=validator-factory.service.js.map