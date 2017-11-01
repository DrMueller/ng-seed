"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var models_1 = require("../models");
var EnumService = /** @class */ (function () {
    function EnumService() {
    }
    EnumService.prototype.getKeyValues = function (enumType) {
        var result = this.getEnumKeyValues(enumType);
        return result;
    };
    EnumService.prototype.parseEnumEntry = function (enumType, str) {
        var enumKeyValues = this.getEnumKeyValues(enumType);
        var enumEntry = enumKeyValues.find(function (f) { return f.value.toLowerCase() === str.toLowerCase(); });
        return enumEntry.key;
    };
    EnumService.prototype.getEnumKeyValues = function (enumType) {
        var parsedEnumKeys = Object.keys(enumType).map(function (f) {
            return parseInt(f, 2);
        });
        var numericEnumKeys = parsedEnumKeys.filter(function (f) {
            return f.toString() !== 'NaN';
        });
        var result = numericEnumKeys.map(function (f) {
            var enumValue = enumType[f];
            return new models_1.EnumKeyValue(f, enumValue);
        });
        return result;
    };
    EnumService = __decorate([
        core_1.Injectable()
    ], EnumService);
    return EnumService;
}());
exports.EnumService = EnumService;
//# sourceMappingURL=enum.service.js.map