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
var PlaygroundPrimengEditorComponent = /** @class */ (function () {
    // https://www.primefaces.org/primeng/#/editor
    function PlaygroundPrimengEditorComponent() {
    }
    PlaygroundPrimengEditorComponent.prototype.ngOnInit = function () {
    };
    PlaygroundPrimengEditorComponent = __decorate([
        core_1.Component({
            selector: 'app-playground-primeng-editor',
            templateUrl: './playground-primeng-editor.component.html',
            styleUrls: ['./playground-primeng-editor.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], PlaygroundPrimengEditorComponent);
    return PlaygroundPrimengEditorComponent;
}());
exports.PlaygroundPrimengEditorComponent = PlaygroundPrimengEditorComponent;
//# sourceMappingURL=playground-primeng-editor.component.js.map