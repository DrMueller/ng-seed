"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var PatternValidator = /** @class */ (function () {
    function PatternValidator() {
    }
    PatternValidator.prototype.createFunc = function () {
        return forms_1.Validators.pattern(this.pattern);
    };
    Object.defineProperty(PatternValidator.prototype, "defaultErrorMessage", {
        get: function () {
            return "Value is not matching '" + this.pattern + "'.";
        },
        enumerable: true,
        configurable: true
    });
    PatternValidator.prototype.initialize = function () {
        var funcArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            funcArgs[_i] = arguments[_i];
        }
        var pattern = funcArgs[0];
        this.pattern = pattern;
    };
    Object.defineProperty(PatternValidator.prototype, "key", {
        get: function () {
            return PatternValidator.key;
        },
        enumerable: true,
        configurable: true
    });
    PatternValidator.key = 'pattern';
    return PatternValidator;
}());
exports.PatternValidator = PatternValidator;
//# sourceMappingURL=pattern-validator.js.map