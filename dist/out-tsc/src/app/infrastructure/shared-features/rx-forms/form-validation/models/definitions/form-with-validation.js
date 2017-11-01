"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormWithValidation = /** @class */ (function () {
    function FormWithValidation(_formGroup, validatedForm) {
        this._formGroup = _formGroup;
        this.validatedForm = validatedForm;
    }
    Object.defineProperty(FormWithValidation.prototype, "formGroup", {
        get: function () {
            return this._formGroup;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormWithValidation.prototype, "isFormValid", {
        get: function () {
            return this._formGroup.valid;
        },
        enumerable: true,
        configurable: true
    });
    FormWithValidation.prototype.setControlDataFromModel = function (model) {
        var _this = this;
        var boundControls = this.validatedForm.getControlsWithModelBinding();
        boundControls.forEach(function (c) {
            var modelValue = model[c.modelPropertyName];
            _this._formGroup.controls[c.controlName].setValue(modelValue);
        });
    };
    FormWithValidation.prototype.setModelFromControls = function (model) {
        var _this = this;
        var boundControls = this.validatedForm.getControlsWithModelBinding();
        boundControls.forEach(function (c) {
            var controlValue = _this._formGroup.controls[c.controlName].value;
            model[c.modelPropertyName] = controlValue;
        });
    };
    FormWithValidation.prototype.getValidatedControl = function (controlName) {
        return this.validatedForm.find(controlName);
    };
    return FormWithValidation;
}());
exports.FormWithValidation = FormWithValidation;
//# sourceMappingURL=form-with-validation.js.map