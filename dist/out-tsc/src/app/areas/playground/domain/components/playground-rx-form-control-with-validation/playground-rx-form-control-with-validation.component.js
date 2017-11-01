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
var rx = require("app/infrastructure/shared-features/rx-forms");
var select_1 = require("app/infrastructure/widgets/select");
var models_1 = require("../../models");
var form_builder_1 = require("./form.builder");
var PlaygroundRxFormControlWithValidationComponent = /** @class */ (function () {
    function PlaygroundRxFormControlWithValidationComponent(rxFormBuilder, formValidationService, validatorFactory) {
        this.rxFormBuilder = rxFormBuilder;
        this.formValidationService = formValidationService;
        this.validatorFactory = validatorFactory;
        this.individuals = models_1.Individual.createSome();
        this.individualSelectConfig = new select_1.SelectConfiguration('id', 'firstName');
    }
    PlaygroundRxFormControlWithValidationComponent.prototype.ngOnInit = function () {
        this.dataForm = form_builder_1.FormBuilder.buildForm(this.formValidationService, this.rxFormBuilder, this.validatorFactory);
    };
    PlaygroundRxFormControlWithValidationComponent = __decorate([
        core_1.Component({
            selector: 'app-playground-rx-form-control-with-validation',
            templateUrl: './playground-rx-form-control-with-validation.component.html',
            styleUrls: ['./playground-rx-form-control-with-validation.component.scss']
        }),
        __metadata("design:paramtypes", [rx.RxFormBuilder, rx.FormValidationService, rx.ValidatorFactoryService])
    ], PlaygroundRxFormControlWithValidationComponent);
    return PlaygroundRxFormControlWithValidationComponent;
}());
exports.PlaygroundRxFormControlWithValidationComponent = PlaygroundRxFormControlWithValidationComponent;
//# sourceMappingURL=playground-rx-form-control-with-validation.component.js.map