"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Creates a mapping between a validation-rule (f.e. minlength) and the corresponding error
// Currently, the ValidationError-Object cotnains just a string, but we might enhance it (severity etc.)
var ValidationKeyErrorMap = /** @class */ (function () {
    function ValidationKeyErrorMap(validationKey, validationError) {
        this.validationKey = validationKey;
        this.validationError = validationError;
    }
    return ValidationKeyErrorMap;
}());
exports.ValidationKeyErrorMap = ValidationKeyErrorMap;
//# sourceMappingURL=validation-key-error-map.js.map