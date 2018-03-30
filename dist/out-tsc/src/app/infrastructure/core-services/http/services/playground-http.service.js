"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var http_1 = require("@angular/http");
var environment_1 = require("../../environment");
var object_creation_1 = require("../../object-creation");
var enums_1 = require("../enums");
var abstractions_1 = require("./abstractions");
var PlaygroundHttpService = /** @class */ (function (_super) {
    __extends(PlaygroundHttpService, _super);
    function PlaygroundHttpService(http, objectFactoryService, environmentService) {
        return _super.call(this, http, objectFactoryService, environmentService.microserviceBaseUrl) || this;
    }
    Object.defineProperty(PlaygroundHttpService.prototype, "apiEndpoint", {
        get: function () {
            return enums_1.ApiEndpoint.TestMicroservice;
        },
        enumerable: true,
        configurable: true
    });
    PlaygroundHttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, object_creation_1.ObjectFactoryService, environment_1.EnvironmentService])
    ], PlaygroundHttpService);
    return PlaygroundHttpService;
}(abstractions_1.HttpBaseService));
exports.PlaygroundHttpService = PlaygroundHttpService;
//# sourceMappingURL=playground-http.service.js.map