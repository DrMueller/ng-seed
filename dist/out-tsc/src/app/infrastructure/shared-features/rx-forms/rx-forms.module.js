"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var form_validation_1 = require("./form-validation");
var form_building_1 = require("./form-building");
var validators_1 = require("./validators");
var provisioning_1 = require("./validators/provisioning");
var comp = require("./form-validation/components");
var RxFormsModule = /** @class */ (function () {
    function RxFormsModule() {
    }
    RxFormsModule_1 = RxFormsModule;
    RxFormsModule.forRoot = function () {
        return {
            ngModule: RxFormsModule_1,
            providers: [
                provisioning_1.ValidatorProviderFactory.ValidatorProviders,
                form_building_1.RxFormBuilder,
                form_validation_1.FormValidationService,
                validators_1.ValidatorFactoryService
            ]
        };
    };
    RxFormsModule = RxFormsModule_1 = __decorate([
        core_1.NgModule({
            exports: [
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                comp.FormControlComponent,
                comp.FormValidationErrorDisplayComponent,
                comp.FormControlWithValidationComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                comp.FormValidationErrorDisplayComponent,
                comp.FormControlComponent,
                comp.FormControlWithValidationComponent
            ]
        })
    ], RxFormsModule);
    return RxFormsModule;
    var RxFormsModule_1;
}());
exports.RxFormsModule = RxFormsModule;
//# sourceMappingURL=rx-forms.module.js.map