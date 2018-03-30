"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringMatchValidator = /** @class */ (function () {
    function StringMatchValidator() {
    }
    StringMatchValidator.prototype.createFunc = function () {
        var _this = this;
        return function (c) {
            var result = null;
            if (c.value !== _this._check) {
                result = {};
                result[_this.key] = true;
            }
            return result;
        };
    };
    Object.defineProperty(StringMatchValidator.prototype, "defaultErrorMessage", {
        get: function () {
            return "Value is not " + this._check + ".";
        },
        enumerable: true,
        configurable: true
    });
    StringMatchValidator.prototype.initialize = function () {
        var funcArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            funcArgs[_i] = arguments[_i];
        }
        var check = funcArgs[0];
        this._check = check;
    };
    Object.defineProperty(StringMatchValidator.prototype, "key", {
        get: function () {
            return StringMatchValidator.key;
        },
        enumerable: true,
        configurable: true
    });
    StringMatchValidator.key = 'stringmatch';
    return StringMatchValidator;
}());
exports.StringMatchValidator = StringMatchValidator;
//# sourceMappingURL=string-match-validator.js.map