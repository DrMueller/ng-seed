import { ControlValidationErrorContainer, ValidationError } from '.';

export class ValidatedControl {
  private _errorContainer = ControlValidationErrorContainer.nullObject;

  public get errorContainer(): ControlValidationErrorContainer {
    return this._errorContainer;
  }

  constructor(public controlName: string, public modelPropertyName: string | null) {
  }

  public static create(controlName: string, modelPropertyName: string | null = null) {
    return new ValidatedControl(controlName, modelPropertyName);
  }

  public get hasErrors(): boolean {
    return this.errorContainer.validationErrors.length > 0;
  }

  public setValidationErrors(validationErrors: ValidationError[]) {
    this._errorContainer.setValidationErrors(validationErrors);
  }
}
