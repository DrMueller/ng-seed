"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var MinLengthValidator = /** @class */ (function () {
    function MinLengthValidator() {
    }
    MinLengthValidator.prototype.createFunc = function () {
        return forms_1.Validators.minLength(this._minLength);
    };
    Object.defineProperty(MinLengthValidator.prototype, "defaultErrorMessage", {
        get: function () {
            return "Value is smaller than " + this._minLength + ".";
        },
        enumerable: true,
        configurable: true
    });
    MinLengthValidator.prototype.initialize = function () {
        var funcArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            funcArgs[_i] = arguments[_i];
        }
        var minLength = funcArgs[0];
        this._minLength = minLength;
    };
    Object.defineProperty(MinLengthValidator.prototype, "key", {
        get: function () {
            return MinLengthValidator.key;
        },
        enumerable: true,
        configurable: true
    });
    MinLengthValidator.key = 'minlength';
    return MinLengthValidator;
}());
exports.MinLengthValidator = MinLengthValidator;
//# sourceMappingURL=min-length-validator.js.map