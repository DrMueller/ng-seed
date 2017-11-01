"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Maps a Control via its name to a set of Validations
var ValidationControlErrorsMap = /** @class */ (function () {
    function ValidationControlErrorsMap(controlName, validationMaps) {
        this.controlName = controlName;
        this.validationMaps = validationMaps;
    }
    ValidationControlErrorsMap.prototype.getValidationErrors = function (validationKeys) {
        var foundMaps = this.validationMaps.filter(function (f) { return validationKeys.some(function (key) { return f.validationKey === key; }); });
        var result = foundMaps.map(function (f) { return f.validationError; });
        return result;
    };
    return ValidationControlErrorsMap;
}());
exports.ValidationControlErrorsMap = ValidationControlErrorsMap;
//# sourceMappingURL=validation-control-errors-map.js.map