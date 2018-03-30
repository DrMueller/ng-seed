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
var error_display_service_1 = require("./error-display.service");
var error_registration_service_1 = require("./error-registration.service");
var ErrorAppInitializationService = /** @class */ (function () {
    function ErrorAppInitializationService(errorDisplayService, errorRegistrationService) {
        this.errorDisplayService = errorDisplayService;
        this.errorRegistrationService = errorRegistrationService;
    }
    ErrorAppInitializationService.prototype.initialize = function () {
        var _this = this;
        this.errorRegistrationService.registerErrorCallback(function (errorInformation) {
            _this.errorDisplayService.showError(errorInformation);
        });
    };
    ErrorAppInitializationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [error_display_service_1.ErrorDisplayService, error_registration_service_1.ErrorRegistrationService])
    ], ErrorAppInitializationService);
    return ErrorAppInitializationService;
}());
exports.ErrorAppInitializationService = ErrorAppInitializationService;
//# sourceMappingURL=error-app-initialization.service.js.map