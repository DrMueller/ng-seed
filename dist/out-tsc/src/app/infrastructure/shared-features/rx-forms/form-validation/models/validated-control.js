"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var control_validation_error_container_1 = require("./control-validation-error-container");
var ValidatedControl = /** @class */ (function () {
    function ValidatedControl(controlName, modelPropertyName) {
        this.controlName = controlName;
        this.modelPropertyName = modelPropertyName;
        this._errorContainer = control_validation_error_container_1.ControlValidationErrorContainer.nullObject;
    }
    Object.defineProperty(ValidatedControl.prototype, "errorContainer", {
        get: function () {
            return this._errorContainer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidatedControl.prototype, "hasErrors", {
        get: function () {
            return this.errorContainer.validationErrors.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    ValidatedControl.create = function (controlName, modelPropertyName) {
        if (modelPropertyName === void 0) { modelPropertyName = null; }
        return new ValidatedControl(controlName, modelPropertyName);
    };
    ValidatedControl.prototype.setValidationErrors = function (validationErrors) {
        this._errorContainer.setValidationErrors(validationErrors);
    };
    return ValidatedControl;
}());
exports.ValidatedControl = ValidatedControl;
//# sourceMappingURL=validated-control.js.map