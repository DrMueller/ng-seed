"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models");
var column_definition_builder_service_1 = require("./column-definition-builder.service");
var handlers_1 = require("./handlers");
var GridOptionsBuilderService = /** @class */ (function () {
    function GridOptionsBuilderService(gridBuilder, gridOptions) {
        this.gridBuilder = gridBuilder;
        this.gridOptions = gridOptions;
        this._colDefs = new Array();
        this.setGridOptionsDefaults();
    }
    GridOptionsBuilderService.prototype.withAutoSizeColumns = function (doAutosize) {
        if (doAutosize) {
            this.gridOptions.onGridReady = this.sizeColumnsIfReady.bind(this);
            this.gridOptions.onGridSizeChanged = this.sizeColumnsIfReady.bind(this);
        }
        return this;
    };
    GridOptionsBuilderService.prototype.startBuildingColumnDefinition = function (headerName, fieldName) {
        var colBuilder = new column_definition_builder_service_1.ColumnDefinitionBuilderService(this, this._colDefs, headerName, fieldName);
        return colBuilder;
    };
    GridOptionsBuilderService.prototype.withAnimatedRows = function (doAnimate) {
        this.gridOptions.animateRows = doAnimate;
        return this;
    };
    GridOptionsBuilderService.prototype.withRowSelectionType = function (type) {
        this.gridOptions.rowSelection = handlers_1.RowSelectionTypeMappingHandler.map(type);
        return this;
    };
    GridOptionsBuilderService.prototype.withEnableSorting = function (doEnable) {
        this.gridOptions.enableSorting = doEnable;
        return this;
    };
    GridOptionsBuilderService.prototype.withEnableColResize = function (doEnable) {
        this.gridOptions.enableColResize = doEnable;
        return this;
    };
    GridOptionsBuilderService.prototype.buildGridOptions = function () {
        this.gridOptions.columnDefs = this._colDefs;
        return this.gridBuilder;
    };
    GridOptionsBuilderService.prototype.setGridOptionsDefaults = function () {
        this.gridOptions.animateRows = true;
        this.gridOptions.enableFilter = true;
        this.gridOptions.rowSelection = handlers_1.RowSelectionTypeMappingHandler.map(models_1.RowSelectionType.Single);
        this.gridOptions.enableSorting = true;
        this.gridOptions.enableColResize = true;
        this.gridOptions.enableServerSideSorting = false;
    };
    GridOptionsBuilderService.prototype.sizeColumnsIfReady = function () {
        if (this.gridOptions.api) {
            this.gridOptions.api.sizeColumnsToFit();
        }
    };
    return GridOptionsBuilderService;
}());
exports.GridOptionsBuilderService = GridOptionsBuilderService;
//# sourceMappingURL=grid-options-builder.service.js.map