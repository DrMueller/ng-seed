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
var select_1 = require("app/infrastructure/widgets/select");
var models_1 = require("../../models");
var PlaygroundSelectComponent = /** @class */ (function () {
    function PlaygroundSelectComponent() {
        this.individuals = [];
        this.selectConfig = new select_1.SelectConfiguration('id', 'firstName');
        this.individualChangedText = '';
    }
    PlaygroundSelectComponent.prototype.ngOnInit = function () {
        this.individuals = models_1.Individual.createSome();
    };
    PlaygroundSelectComponent.prototype.individualChanged = function (individual) {
        if (individual) {
            this.individualChangedText = "Individual changed to: " + individual.firstName + " " + individual.lastName + " with the ID " + individual.id;
        }
        else {
            this.individualChangedText = 'Individual changed to undefined!';
        }
    };
    PlaygroundSelectComponent = __decorate([
        core_1.Component({
            selector: 'app-playground-select',
            templateUrl: './playground-select.component.html',
            styleUrls: ['./playground-select.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], PlaygroundSelectComponent);
    return PlaygroundSelectComponent;
}());
exports.PlaygroundSelectComponent = PlaygroundSelectComponent;
//# sourceMappingURL=playground-select.component.js.map