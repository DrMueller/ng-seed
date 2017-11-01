"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ColumnSizeBuilderService = /** @class */ (function () {
    function ColumnSizeBuilderService(columnDefinitionBuilder, colDef) {
        this.columnDefinitionBuilder = columnDefinitionBuilder;
        this.colDef = colDef;
    }
    ColumnSizeBuilderService.prototype.withWidth = function (width) {
        this.colDef.width = width;
        this.colDef.suppressSizeToFit = true;
        return this.columnDefinitionBuilder;
    };
    ColumnSizeBuilderService.prototype.withFitSoSize = function () {
        this.colDef.suppressSizeToFit = false;
        return this.columnDefinitionBuilder;
    };
    return ColumnSizeBuilderService;
}());
exports.ColumnSizeBuilderService = ColumnSizeBuilderService;
//# sourceMappingURL=column-size-builder.service.js.map