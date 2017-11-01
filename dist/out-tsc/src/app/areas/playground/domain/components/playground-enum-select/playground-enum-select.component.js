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
var utils_1 = require("app/infrastructure/utils");
var models_1 = require("../../models");
var PlaygroundEnumSelectComponent = /** @class */ (function () {
    function PlaygroundEnumSelectComponent() {
    }
    Object.defineProperty(PlaygroundEnumSelectComponent.prototype, "countryEnum", {
        get: function () {
            return models_1.Country;
        },
        enumerable: true,
        configurable: true
    });
    PlaygroundEnumSelectComponent.prototype.ngOnInit = function () {
    };
    PlaygroundEnumSelectComponent.prototype.setSwitzerlandClicked = function () {
        this.selectedCountry = models_1.Country.Switzerland;
    };
    PlaygroundEnumSelectComponent.prototype.countryChanged = function (country) {
        this.selectedCountry = country;
        if (utils_1.ObjectUtils.isNullOrUndefined(country)) {
            this.countryChangedText = 'Country changed to undefined!';
        }
        else {
            this.countryChangedText = "Country changed to: " + models_1.Country[country] + ".";
        }
    };
    PlaygroundEnumSelectComponent = __decorate([
        core_1.Component({
            selector: 'app-playground-enum-select',
            templateUrl: './playground-enum-select.component.html',
            styleUrls: ['./playground-enum-select.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], PlaygroundEnumSelectComponent);
    return PlaygroundEnumSelectComponent;
}());
exports.PlaygroundEnumSelectComponent = PlaygroundEnumSelectComponent;
//# sourceMappingURL=playground-enum-select.component.js.map