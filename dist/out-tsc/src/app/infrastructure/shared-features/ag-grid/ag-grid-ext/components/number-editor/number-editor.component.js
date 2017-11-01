"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NumberEditorComponent = /** @class */ (function () {
    function NumberEditorComponent() {
    }
    NumberEditorComponent.prototype.getValue = function () {
        return this.value;
    };
    NumberEditorComponent.prototype.isPopup = function () {
        return false;
    };
    NumberEditorComponent.prototype.isCancelBeforeStart = function () {
        return false;
    };
    NumberEditorComponent.prototype.isCancelAfterEnd = function () {
        return false;
    };
    NumberEditorComponent.prototype.focusIn = function () {
    };
    NumberEditorComponent.prototype.focusOut = function () {
    };
    NumberEditorComponent.prototype.agInit = function (params) {
        this.value = params.value;
    };
    NumberEditorComponent.prototype.afterGuiAttached = function () {
    };
    NumberEditorComponent = __decorate([
        core_1.Component({
            selector: 'app-number-editor',
            templateUrl: './number-editor.component.html',
            styleUrls: ['./number-editor.component.scss']
        })
    ], NumberEditorComponent);
    return NumberEditorComponent;
}());
exports.NumberEditorComponent = NumberEditorComponent;
//# sourceMappingURL=number-editor.component.js.map