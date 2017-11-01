"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var environment_1 = require("app/../environments/environment");
var EnvironmentService = /** @class */ (function () {
    function EnvironmentService() {
    }
    Object.defineProperty(EnvironmentService.prototype, "isProduction", {
        get: function () {
            return environment_1.environment.production;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnvironmentService.prototype, "microserviceBaseUrl", {
        get: function () {
            return environment_1.environment.microserviceBaseUrl;
        },
        enumerable: true,
        configurable: true
    });
    EnvironmentService = __decorate([
        core_1.Injectable()
    ], EnvironmentService);
    return EnvironmentService;
}());
exports.EnvironmentService = EnvironmentService;
//# sourceMappingURL=environment.service.js.map