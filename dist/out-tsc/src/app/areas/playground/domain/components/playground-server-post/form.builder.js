"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormBuilder = /** @class */ (function () {
    function FormBuilder() {
    }
    FormBuilder.buildForm = function (formValidationService, formBuilder, validatorFactory) {
        var result = formBuilder.startBuildingFormGroup(formValidationService)
            .withControl('firstNameControl')
            .withModelBinding('firstName')
            .withDefaultValue('Matthias')
            .withValidation(validatorFactory.required())
            .buildValidationKeyErrorMap()
            .buildControl()
            .withControl('lastNameControl')
            .withModelBinding('lastName')
            .withValidation(validatorFactory.required())
            .buildValidationKeyErrorMap()
            .buildControl()
            .withFormValidationWatcher()
            .withDebcounceTime(500)
            .buildFormWatcher()
            .buildForm();
        return result;
    };
    return FormBuilder;
}());
exports.FormBuilder = FormBuilder;
//# sourceMappingURL=form.builder.js.map