"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AddButtonCellRendererComponent = /** @class */ (function () {
    function AddButtonCellRendererComponent() {
    }
    AddButtonCellRendererComponent.prototype.refresh = function () {
    };
    AddButtonCellRendererComponent.prototype.agInit = function (params) {
        this._params = params;
    };
    AddButtonCellRendererComponent.prototype.afterGuiAttached = function () {
    };
    AddButtonCellRendererComponent.prototype.cellClicked = function () {
        var cellMediatorService = this._params.context;
        cellMediatorService.executeCallback(this._params.node);
    };
    AddButtonCellRendererComponent = __decorate([
        core_1.Component({
            selector: 'app-add-button-cell-renderer',
            templateUrl: './add-button-cell-renderer.component.html',
            styleUrls: ['./add-button-cell-renderer.component.scss']
        })
    ], AddButtonCellRendererComponent);
    return AddButtonCellRendererComponent;
}());
exports.AddButtonCellRendererComponent = AddButtonCellRendererComponent;
//# sourceMappingURL=add-button-cell-renderer.component.js.map