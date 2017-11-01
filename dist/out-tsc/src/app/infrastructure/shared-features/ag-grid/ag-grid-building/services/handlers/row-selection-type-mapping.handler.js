"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../../models");
var RowSelectionTypeMappingHandler = /** @class */ (function () {
    function RowSelectionTypeMappingHandler() {
    }
    RowSelectionTypeMappingHandler.map = function (type) {
        switch (type) {
            case models_1.RowSelectionType.Multiple: {
                return 'multiple';
            }
            case models_1.RowSelectionType.Single: {
                return 'single';
            }
        }
    };
    return RowSelectionTypeMappingHandler;
}());
exports.RowSelectionTypeMappingHandler = RowSelectionTypeMappingHandler;
//# sourceMappingURL=row-selection-type-mapping.handler.js.map