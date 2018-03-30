"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GridBuilder = /** @class */ (function () {
    function GridBuilder() {
    }
    GridBuilder.buildGrid = function (gridBuilder) {
        var result = gridBuilder
            .startBuildingOptions()
            .withAutoSizeColumns(true)
            .startBuildingColumnDefinition('ID', 'id')
            .startBuildingColumnSize()
            .withWidth(100)
            .buildColumnDefinition()
            .startBuildingColumnDefinition('First Name', 'firstName')
            .startBuildingColumnSize()
            .withWidth(200)
            .withCellStyleObject({ color: 'red', 'background-color': 'green' })
            .withSuppressMenu(false)
            .buildColumnDefinition()
            .startBuildingColumnDefinition('Last Name', 'lastName')
            .startBuildingColumnSize()
            .withFitSoSize()
            .withSuppressSorting(true)
            .buildColumnDefinition()
            .buildGridOptions()
            .buildGrid();
        return result;
    };
    return GridBuilder;
}());
exports.GridBuilder = GridBuilder;
//# sourceMappingURL=grid.builder.js.map