"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../../../utils");
var ValidatedForm = /** @class */ (function () {
    function ValidatedForm(validatedControls) {
        this.validatedControls = validatedControls;
    }
    ValidatedForm.prototype.find = function (controlName) {
        var controlValidation = this.validatedControls.find(function (f) { return f.controlName === controlName; });
        if (controlValidation) {
            return controlValidation;
        }
        throw new Error("Control " + controlName + " not found.");
    };
    ValidatedForm.prototype.getControlsWithModelBinding = function () {
        var result = this.validatedControls.filter(function (control) {
            return !utils_1.ObjectUtils.isNullOrUndefined(control.modelPropertyName);
        });
        return result;
    };
    ValidatedForm.prototype.setControlValidationErrors = function (controlName, validationErrors) {
        var control = this.find(controlName);
        control.setValidationErrors(validationErrors);
    };
    Object.defineProperty(ValidatedForm, "nullObject", {
        get: function () {
            return new ValidatedForm([]);
        },
        enumerable: true,
        configurable: true
    });
    return ValidatedForm;
}());
exports.ValidatedForm = ValidatedForm;
//# sourceMappingURL=validated-form.js.map