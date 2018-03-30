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
var models_1 = require("../../models");
var FormControlComponent = /** @class */ (function () {
    function FormControlComponent() {
    }
    FormControlComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", forms_1.FormGroup)
    ], FormControlComponent.prototype, "formGroup", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", models_1.ValidatedControl)
    ], FormControlComponent.prototype, "validatedControl", void 0);
    FormControlComponent = __decorate([
        core_1.Component({
            selector: 'app-form-control',
            templateUrl: './form-control.component.html',
            styleUrls: ['./form-control.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], FormControlComponent);
    return FormControlComponent;
}());
exports.FormControlComponent = FormControlComponent;
//# sourceMappingURL=form-control.component.js.map