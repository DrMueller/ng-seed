"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Defines a collection of validation errors for a Control, used by the ValidatedControl-Model
var ControlValidationErrorContainer = /** @class */ (function () {
    function ControlValidationErrorContainer() {
        this._validationErrors = [];
    }
    Object.defineProperty(ControlValidationErrorContainer.prototype, "validationErrors", {
        get: function () {
            return this._validationErrors;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlValidationErrorContainer, "nullObject", {
        get: function () {
            return new ControlValidationErrorContainer();
        },
        enumerable: true,
        configurable: true
    });
    ControlValidationErrorContainer.prototype.setValidationErrors = function (validationErrors) {
        this._validationErrors = validationErrors;
    };
    return ControlValidationErrorContainer;
}());
exports.ControlValidationErrorContainer = ControlValidationErrorContainer;
//# sourceMappingURL=control-validation-error-container.js.map