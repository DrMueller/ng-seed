"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var form_validation_1 = require("../../form-validation");
var form_control_builder_1 = require("./form-control-builder");
var form_watching_builder_1 = require("./form-watching-builder");
var RxFormBuilder = /** @class */ (function () {
    function RxFormBuilder(formBuilder) {
        this.formBuilder = formBuilder;
    }
    RxFormBuilder.prototype.buildForm = function () {
        var validatedForm = new form_validation_1.ValidatedForm(this.validatedControls);
        this.formValidationService.initialize(this.formGroup, this.controlErrorsMaps, validatedForm);
        var result = new form_validation_1.FormWithValidation(this.formGroup, validatedForm);
        return result;
    };
    RxFormBuilder.prototype.startBuildingFormGroup = function (formValidationService) {
        this.formValidationService = formValidationService;
        this.controlErrorsMaps = [];
        this.validatedControls = [];
        this.formGroup = this.formBuilder.group({});
        return this;
    };
    RxFormBuilder.prototype.withControl = function (controlName) {
        var formControlBuilder = new form_control_builder_1.FormControlBuilder(controlName, this.controlErrorsMaps, this.formGroup, this.validatedControls, this);
        return formControlBuilder;
    };
    RxFormBuilder.prototype.withFormValidationWatcher = function () {
        var formWatchingBuilder = new form_watching_builder_1.FormWatchingBuilder(this.formGroup, this.formValidationService, this);
        return formWatchingBuilder;
    };
    RxFormBuilder = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], RxFormBuilder);
    return RxFormBuilder;
}());
exports.RxFormBuilder = RxFormBuilder;
//# sourceMappingURL=rx-form-builder.js.map