"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var column_size_builder_service_1 = require("./column-size-builder.service");
var ColumnDefinitionBuilderService = /** @class */ (function () {
    function ColumnDefinitionBuilderService(gridOptionsBuilderService, colDefs, headerName, fieldName) {
        this.gridOptionsBuilderService = gridOptionsBuilderService;
        this.colDefs = colDefs;
        this._colDef = {};
        this._colDef.headerName = headerName;
        this._colDef.field = fieldName;
        this.setColDefDefaults();
    }
    ColumnDefinitionBuilderService.prototype.withCellStyleObject = function (styleObj) {
        this._colDef.cellStyle = styleObj;
        return this;
    };
    ColumnDefinitionBuilderService.prototype.startBuildingColumnSize = function () {
        var colSizeBuilder = new column_size_builder_service_1.ColumnSizeBuilderService(this, this._colDef);
        return colSizeBuilder;
    };
    ColumnDefinitionBuilderService.prototype.withSuppressSizeToFit = function (doSuppress) {
        this._colDef.suppressSizeToFit = doSuppress;
        return this;
    };
    ColumnDefinitionBuilderService.prototype.withSuppressMenu = function (doSuppress) {
        this._colDef.suppressMenu = doSuppress;
        return this;
    };
    ColumnDefinitionBuilderService.prototype.withSuppressSorting = function (doSuppress) {
        this._colDef.suppressSorting = doSuppress;
        return this;
    };
    ColumnDefinitionBuilderService.prototype.buildColumnDefinition = function () {
        this.colDefs.push(this._colDef);
        return this.gridOptionsBuilderService;
    };
    ColumnDefinitionBuilderService.prototype.setColDefDefaults = function () {
        this._colDef.cellStyle = { 'border-style': 'none' };
        this._colDef.suppressMenu = true;
        this._colDef.suppressSorting = true;
        this._colDef.suppressSizeToFit = false;
    };
    return ColumnDefinitionBuilderService;
}());
exports.ColumnDefinitionBuilderService = ColumnDefinitionBuilderService;
//# sourceMappingURL=column-definition-builder.service.js.map