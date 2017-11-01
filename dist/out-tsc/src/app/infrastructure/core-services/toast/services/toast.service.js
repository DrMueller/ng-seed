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
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var ToastService = /** @class */ (function () {
    // https://www.npmjs.com/package/ng2-toastr
    function ToastService(toastsManager) {
        this.toastsManager = toastsManager;
    }
    ToastService.prototype.showInfoToast = function (message, title) {
        this.toastsManager.info(message, title);
    };
    ToastService.prototype.showSuccessToast = function (message, title) {
        this.toastsManager.success(message, title);
    };
    ToastService.prototype.showErrorToast = function (message, title) {
        this.toastsManager.error(message, title);
    };
    ToastService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [ng2_toastr_1.ToastsManager])
    ], ToastService);
    return ToastService;
}());
exports.ToastService = ToastService;
//# sourceMappingURL=toast.service.js.map