"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var enums_1 = require("./enums");
var environment_1 = require("./environment");
var event_dispatching_1 = require("./event-dispatching");
var http = require("./http");
var object_creation_1 = require("./object-creation");
var services_1 = require("./toast/services");
// Not adding the mediators as providers here, since they should be used in the components
var CoreServicesModule = /** @class */ (function () {
    function CoreServicesModule() {
    }
    CoreServicesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                ng2_toastr_1.ToastModule.forRoot(),
                http_1.HttpModule
            ],
            providers: [
                environment_1.EnvironmentService,
                services_1.ToastService,
                services_1.ToastConfigurationService,
                event_dispatching_1.EventDispatcherService,
                http.PlaygroundHttpService,
                object_creation_1.ObjectFactoryService,
                enums_1.EnumService
            ]
        })
    ], CoreServicesModule);
    return CoreServicesModule;
}());
exports.CoreServicesModule = CoreServicesModule;
//# sourceMappingURL=core-services.module.js.map