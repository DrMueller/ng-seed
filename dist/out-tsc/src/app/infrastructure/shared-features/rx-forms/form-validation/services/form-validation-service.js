"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FormValidationService = /** @class */ (function () {
    function FormValidationService() {
    }
    FormValidationService.prototype.initialize = function (formGroup, controlErrorsMaps, validatedForm) {
        this.controlErrorsMaps = controlErrorsMaps;
        this.formGroup = formGroup;
        this.validatedForm = validatedForm;
    };
    FormValidationService.prototype.validate = function () {
        for (var controlName in this.formGroup.controls) {
            if (this.formGroup.controls.hasOwnProperty(controlName)) {
                var validationErrors = this.getControlValidationErrors(controlName);
                this.validatedForm.setControlValidationErrors(controlName, validationErrors);
            }
        }
    };
    FormValidationService.prototype.getControlValidationErrors = function (controlName) {
        var control = this.formGroup.controls[controlName];
        var controlErorrKeys = this.getControlErrorKeys(control);
        if (controlErorrKeys) {
            var controlErrorsMap = this.controlErrorsMaps.find(function (f) { return f.controlName === controlName; });
            if (controlErrorsMap) {
                return controlErrorsMap.getValidationErrors(controlErorrKeys);
            }
        }
        return [];
    };
    FormValidationService.prototype.getControlErrorKeys = function (control) {
        if ((control.touched || control.dirty) && !control.valid) {
            var controlErrors = Object.keys(control.errors);
            return controlErrors;
        }
        return undefined;
    };
    FormValidationService = __decorate([
        core_1.Injectable()
    ], FormValidationService);
    return FormValidationService;
}());
exports.FormValidationService = FormValidationService;
//# sourceMappingURL=form-validation-service.js.map