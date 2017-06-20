import { FormValidationService, RxFormBuilder, ValidatorFactoryService, FormWithValidation } from 'app/common/widgets/rx-forms';

export class FormBuilder {
  public static buildForm(
    formValidationService: FormValidationService,
    formBuilder: RxFormBuilder,
    validatorFactory: ValidatorFactoryService): FormWithValidation {

    const result = formBuilder.startBuildingFormGroup(formValidationService)
      .withControl('emailControl')
      .withValidation(validatorFactory.minLength(5))
      .withCustomErrorMessage('Email has to be at least 5 characters')
      .buildValidationKeyErrorMap()
      .withValidation(validatorFactory.required())
      .buildValidationKeyErrorMap()
      .buildControl()
      .withControl('countryControl')
      .withValidation(validatorFactory.required())
      .buildValidationKeyErrorMap()
      .buildControl()
      .withFormValidationWatcher()
      .withDebcounceTime(500)
      .buildFormWatcher()
      .buildForm();

    return result;
  }
}
