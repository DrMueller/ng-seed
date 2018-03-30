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
var ag_grid_building_1 = require("app/infrastructure/shared-features/ag-grid/ag-grid-building");
var models_1 = require("../../models");
var grid_builder_1 = require("./grid.builder");
var PlaygroundGridBuilderComponent = /** @class */ (function () {
    function PlaygroundGridBuilderComponent(gridBuilder) {
        this.gridBuilder = gridBuilder;
    }
    PlaygroundGridBuilderComponent.prototype.ngOnInit = function () {
        this.grid = grid_builder_1.GridBuilder.buildGrid(this.gridBuilder);
        (_a = this.grid.entries).push.apply(_a, models_1.Individual.createSome());
        var _a;
    };
    PlaygroundGridBuilderComponent.prototype.removeRowClicked = function () {
        this.grid.entries.splice(0, 1);
    };
    PlaygroundGridBuilderComponent.prototype.changePropertyClicked = function () {
        this.grid.entries[0].firstName = this.grid.entries[0].firstName + '2';
    };
    PlaygroundGridBuilderComponent.prototype.changeAllClicked = function () {
        this.grid.entries.forEach(function (f) {
            f.lastName = f.lastName + ' Updated!';
        });
    };
    PlaygroundGridBuilderComponent.prototype.addRowClicked = function () {
        var ind = new models_1.Individual();
        ind.lastName = 'Lannister';
        ind.firstName = 'Tyrion';
        ind.id = 'z1324';
        this.grid.entries.push(ind);
    };
    PlaygroundGridBuilderComponent = __decorate([
        core_1.Component({
            selector: 'app-playground-grid-builder',
            templateUrl: './playground-grid-builder.component.html',
            styleUrls: ['./playground-grid-builder.component.scss']
        }),
        __metadata("design:paramtypes", [ag_grid_building_1.GridBuilderService])
    ], PlaygroundGridBuilderComponent);
    return PlaygroundGridBuilderComponent;
}());
exports.PlaygroundGridBuilderComponent = PlaygroundGridBuilderComponent;
//# sourceMappingURL=playground-grid-builder.component.js.map