"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("app/infrastructure/utils");
var RequiredValidator = /** @class */ (function () {
    function RequiredValidator() {
    }
    RequiredValidator.prototype.createFunc = function () {
        var _this = this;
        return function (c) {
            var result = null;
            if (_this.checkIfValueIsEmptyNullorUndefined(c.value)) {
                result = {};
                result[_this.key] = true;
            }
            return result;
        };
    };
    Object.defineProperty(RequiredValidator.prototype, "defaultErrorMessage", {
        get: function () {
            return 'Value is required.';
        },
        enumerable: true,
        configurable: true
    });
    RequiredValidator.prototype.initialize = function () {
    };
    Object.defineProperty(RequiredValidator.prototype, "key", {
        get: function () {
            return RequiredValidator.key;
        },
        enumerable: true,
        configurable: true
    });
    RequiredValidator.prototype.checkIfValueIsEmptyNullorUndefined = function (value) {
        if (utils_1.ObjectUtils.isNullOrUndefined(value)) {
            return true;
        }
        if (value === '') {
            return true;
        }
        return false;
    };
    RequiredValidator.key = 'required';
    return RequiredValidator;
}());
exports.RequiredValidator = RequiredValidator;
//# sourceMappingURL=required-validator.js.map