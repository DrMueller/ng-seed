"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var form_validation_1 = require("../../form-validation");
var validation_key_error_map_builder_1 = require("./validation-key-error-map-builder");
var FormControlBuilder = /** @class */ (function () {
    function FormControlBuilder(controlName, controlErrorsMaps, formGroup, validatedControls, formBuilder) {
        this.controlName = controlName;
        this.controlErrorsMaps = controlErrorsMaps;
        this.formGroup = formGroup;
        this.validatedControls = validatedControls;
        this.formBuilder = formBuilder;
        this.defaultValue = null;
        this.modelPropertyName = null;
        this.validationErrorKeyMaps = [];
        this.validators = [];
    }
    FormControlBuilder.prototype.buildControl = function () {
        this.createAndAddFormControl();
        this.createAndAddValidatedControl();
        this.createAndPushValidationErrorMap();
        return this.formBuilder;
    };
    FormControlBuilder.prototype.withDefaultValue = function (defaultValue) {
        this.defaultValue = defaultValue;
        return this;
    };
    FormControlBuilder.prototype.withModelBinding = function (propertyName) {
        this.modelPropertyName = propertyName;
        return this;
    };
    FormControlBuilder.prototype.withValidation = function (validator) {
        this.validators.push(validator);
        var validationRuleBuilder = new validation_key_error_map_builder_1.ValidationKeyErrorMapBuilder(this.validationErrorKeyMaps, validator, this);
        return validationRuleBuilder;
    };
    FormControlBuilder.prototype.createAndAddFormControl = function () {
        var formControl = new forms_1.FormControl();
        formControl.setValue(this.defaultValue, {
            onlySelf: true
        });
        var validatorFunctions = this.validators.map(function (f) { return f.createFunc(); });
        formControl.setValidators(validatorFunctions);
        this.formGroup.addControl(this.controlName, formControl);
    };
    FormControlBuilder.prototype.createAndAddValidatedControl = function () {
        var validatedControl = new form_validation_1.ValidatedControl(this.controlName, this.modelPropertyName);
        this.validatedControls.push(validatedControl);
    };
    FormControlBuilder.prototype.createAndPushValidationErrorMap = function () {
        var va = new form_validation_1.ValidationControlErrorsMap(this.controlName, this.validationErrorKeyMaps);
        this.controlErrorsMaps.push(va);
    };
    return FormControlBuilder;
}());
exports.FormControlBuilder = FormControlBuilder;
//# sourceMappingURL=form-control-builder.js.map