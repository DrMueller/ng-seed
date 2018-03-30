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
var PlaygroundOverviewComponent = /** @class */ (function () {
    function PlaygroundOverviewComponent() {
    }
    PlaygroundOverviewComponent.prototype.ngOnInit = function () {
    };
    PlaygroundOverviewComponent = __decorate([
        core_1.Component({
            selector: 'app-playground-overview',
            templateUrl: './playground-overview.component.html',
            styleUrls: ['./playground-overview.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], PlaygroundOverviewComponent);
    return PlaygroundOverviewComponent;
}());
exports.PlaygroundOverviewComponent = PlaygroundOverviewComponent;
//# sourceMappingURL=playground-overview.component.js.map