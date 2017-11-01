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
var models_1 = require("../models");
var error_registration_service_1 = require("./error-registration.service");
var ErrorDispatcherService = /** @class */ (function () {
    function ErrorDispatcherService(errorRegistrationService) {
        this.errorRegistrationService = errorRegistrationService;
    }
    ErrorDispatcherService.prototype.dispatchError = function (error) {
        this.prepareAndDispatchErrorInformation(error);
    };
    ErrorDispatcherService.prototype.createErrorInformation = function (error) {
        error = this.unwrapError(error);
        var errorMessage = error.message || 'Unknown';
        var errorName = error.name;
        var result = new models_1.ErrorInformation(errorName, errorMessage);
        return result;
    };
    ErrorDispatcherService.prototype.prepareAndDispatchErrorInformation = function (error) {
        var errInfo = this.createErrorInformation(error);
        this.errorRegistrationService.registeredErrorCallbacks.forEach(function (cb) {
            cb(errInfo);
        });
    };
    ErrorDispatcherService.prototype.unwrapError = function (error) {
        if (error.hasOwnProperty('rejection')) {
            error = error.rejection;
        }
        if (error.hasOwnProperty('status') && error.status === 0) {
            return new Error('Server not reachable');
        }
        if (typeof error.json === 'function') {
            error = error.json();
        }
        while (error.hasOwnProperty('error')) {
            error = error.error;
        }
        console.log(error);
        return error;
    };
    ErrorDispatcherService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [error_registration_service_1.ErrorRegistrationService])
    ], ErrorDispatcherService);
    return ErrorDispatcherService;
}());
exports.ErrorDispatcherService = ErrorDispatcherService;
//# sourceMappingURL=error-dispatcher.service.js.map