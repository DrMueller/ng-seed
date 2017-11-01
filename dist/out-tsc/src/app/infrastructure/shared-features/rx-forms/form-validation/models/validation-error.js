"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Defines the message of a broken validation
// Currently only just the string, but could be enhanced, f.e. by severity etc.
var ValidationError = /** @class */ (function () {
    function ValidationError(errorMessage) {
        this.errorMessage = errorMessage;
    }
    return ValidationError;
}());
exports.ValidationError = ValidationError;
//# sourceMappingURL=validation-error.js.map