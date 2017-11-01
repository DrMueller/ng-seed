"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var models_1 = require("../models");
var grid_options_builder_service_1 = require("./grid-options-builder.service");
var GridBuilderService = /** @class */ (function () {
    function GridBuilderService() {
    }
    GridBuilderService.prototype.startBuildingOptions = function () {
        this._gridOptions = {};
        var result = new grid_options_builder_service_1.GridOptionsBuilderService(this, this._gridOptions);
        return result;
    };
    GridBuilderService.prototype.buildGrid = function () {
        var result = new models_1.Grid(this._gridOptions);
        return result;
    };
    GridBuilderService = __decorate([
        core_1.Injectable()
    ], GridBuilderService);
    return GridBuilderService;
}());
exports.GridBuilderService = GridBuilderService;
//# sourceMappingURL=grid-builder.service.js.map