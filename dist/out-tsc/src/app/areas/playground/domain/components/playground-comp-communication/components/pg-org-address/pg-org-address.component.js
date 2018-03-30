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
var mediation_1 = require("app/infrastructure/core-services/mediation");
var models_1 = require("../../models");
var PgOrgAddressComponent = /** @class */ (function () {
    function PgOrgAddressComponent(organisationBuilder) {
        this.organisationBuilder = organisationBuilder;
    }
    PgOrgAddressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.organisationBuilder.subsribeBuildStep(function (org) {
            org.address = _this.createAddress();
        });
    };
    PgOrgAddressComponent.prototype.createAddress = function () {
        return new models_1.Address('Fakestreet 123', 'Fake Town');
    };
    PgOrgAddressComponent = __decorate([
        core_1.Component({
            selector: 'app-pg-org-address',
            templateUrl: './pg-org-address.component.html',
            styleUrls: ['./pg-org-address.component.scss']
        }),
        __metadata("design:paramtypes", [mediation_1.MediatorBuilderService])
    ], PgOrgAddressComponent);
    return PgOrgAddressComponent;
}());
exports.PgOrgAddressComponent = PgOrgAddressComponent;
//# sourceMappingURL=pg-org-address.component.js.map