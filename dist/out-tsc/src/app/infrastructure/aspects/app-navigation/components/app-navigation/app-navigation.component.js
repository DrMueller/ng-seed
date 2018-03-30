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
var services_1 = require("../../services");
var AppNavigationComponent = /** @class */ (function () {
    function AppNavigationComponent(appNavigationService) {
        this.appNavigationService = appNavigationService;
        this.appNavigationEntries = [];
    }
    Object.defineProperty(AppNavigationComponent.prototype, "applicationTitle", {
        get: function () {
            return 'DMSP';
        },
        enumerable: true,
        configurable: true
    });
    AppNavigationComponent.prototype.ngOnInit = function () {
        this.appNavigationEntries = this.appNavigationService.getNavigationEntries();
    };
    AppNavigationComponent = __decorate([
        core_1.Component({
            selector: 'app-app-navigation',
            templateUrl: './app-navigation.component.html',
            styleUrls: ['./app-navigation.component.scss']
        }),
        __metadata("design:paramtypes", [services_1.AppNavigationService])
    ], AppNavigationComponent);
    return AppNavigationComponent;
}());
exports.AppNavigationComponent = AppNavigationComponent;
//# sourceMappingURL=app-navigation.component.js.map