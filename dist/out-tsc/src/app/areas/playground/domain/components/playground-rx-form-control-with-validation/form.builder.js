"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormBuilder = /** @class */ (function () {
    function FormBuilder() {
    }
    FormBuilder.buildForm = function (formValidationService, formBuilder, validatorFactory) {
        var result = formBuilder.startBuildingFormGroup(formValidationService)
            .withControl('emailControl')
            .withDefaultValue('fake1234@gmx.ch')
            .withValidation(validatorFactory.minLength(5))
            .withCustomErrorMessage('Email has to be at least 5 characters')
            .buildValidationKeyErrorMap()
            .withValidation(validatorFactory.required())
            .buildValidationKeyErrorMap()
            .buildControl()
            .withControl('individualControl')
            .withValidation(validatorFactory.required())
            .buildValidationKeyErrorMap()
            .withValidation(validatorFactory.stringMatch('Matthias'))
            .buildValidationKeyErrorMap()
            .withValidation(validatorFactory.stringMatch('Patrick'))
            .buildValidationKeyErrorMap()
            .buildControl()
            .withControl('countryControl')
            .withDefaultValue(2)
            .buildControl()
            .withControl('firstNameControl')
            .withDefaultValue('Matthias')
            .withValidation(validatorFactory.minLength(5))
            .buildValidationKeyErrorMap()
            .withValidation(validatorFactory.required())
            .buildValidationKeyErrorMap()
            .withValidation(validatorFactory.stringMatch('Matthias'))
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