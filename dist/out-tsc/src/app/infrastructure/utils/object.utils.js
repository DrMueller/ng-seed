"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectUtils = /** @class */ (function () {
    function ObjectUtils() {
    }
    ObjectUtils.isNullOrUndefined = function (obj) {
        if (obj === null) {
            return true;
        }
        if (typeof obj === 'undefined') {
            return true;
        }
        return false;
    };
    return ObjectUtils;
}());
exports.ObjectUtils = ObjectUtils;
//# sourceMappingURL=object.utils.js.map