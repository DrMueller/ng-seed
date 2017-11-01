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
var object_creation_1 = require("app/infrastructure/core-services/object-creation");
var models_1 = require("../../models");
var PlaygroundReflectComponent = /** @class */ (function () {
    function PlaygroundReflectComponent(objFactoryService) {
        this.objFactoryService = objFactoryService;
    }
    PlaygroundReflectComponent.prototype.ngOnInit = function () {
        var org = this.createOrg();
        this.organisation = this.objFactoryService.create(org, models_1.Organisation);
    };
    Object.defineProperty(PlaygroundReflectComponent.prototype, "organisationIndividuals", {
        get: function () {
            return this.organisation.individuals;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaygroundReflectComponent.prototype, "individualAddress2CompleteStreet", {
        get: function () {
            return this.organisation.individual.address2.getCompleteStreet();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaygroundReflectComponent.prototype, "individualAddressCompleteStreet", {
        get: function () {
            return this.organisation.individual.address.getCompleteStreet();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaygroundReflectComponent.prototype, "individualFullName", {
        get: function () {
            return this.organisation.individual.fullName;
        },
        enumerable: true,
        configurable: true
    });
    PlaygroundReflectComponent.prototype.createOrg = function () {
        var result = new Object();
        result.coName = 'Co123';
        result.name = 'Fake Org 321';
        result.individual = new Object();
        result.individual.firstName = 'Matthias';
        result.individual.lastName = 'Müller';
        result.individual.id = '1234';
        result.individual.address = new Object();
        result.individual.address.streetName = 'Fakestreet';
        result.individual.address2 = new Object();
        result.individual.address2.streetName = 'Street 2';
        result.individual.address2.streetNumber = 'Number 2';
        result.individuals = [];
        result.individuals.push({
            firstName: 'Jaime',
            lastName: 'Lannister',
            id: '467'
        });
        result.individuals.push({
            firstName: 'Joe',
            lastName: 'Abercombie',
            id: '5789'
        });
        return result;
    };
    PlaygroundReflectComponent = __decorate([
        core_1.Component({
            selector: 'app-playground-reflect',
            templateUrl: './playground-reflect.component.html',
            styleUrls: ['./playground-reflect.component.scss']
        }),
        __metadata("design:paramtypes", [object_creation_1.ObjectFactoryService])
    ], PlaygroundReflectComponent);
    return PlaygroundReflectComponent;
}());
exports.PlaygroundReflectComponent = PlaygroundReflectComponent;
//# sourceMappingURL=playground-reflect.component.js.map