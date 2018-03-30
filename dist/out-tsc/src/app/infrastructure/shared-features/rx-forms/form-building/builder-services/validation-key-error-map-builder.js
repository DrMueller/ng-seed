"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var form_validation_1 = require("../../form-validation");
var ValidationKeyErrorMapBuilder = /** @class */ (function () {
    function ValidationKeyErrorMapBuilder(keyErrorMaps, validator, formControlBuilder) {
        this.keyErrorMaps = keyErrorMaps;
        this.validator = validator;
        this.formControlBuilder = formControlBuilder;
        this._customErrorMessage = null;
    }
    ValidationKeyErrorMapBuilder.prototype.withCustomErrorMessage = function (errorMessage) {
        this._customErrorMessage = errorMessage;
        return this;
    };
    ValidationKeyErrorMapBuilder.prototype.buildValidationKeyErrorMap = function () {
        var errorMessage = this.getErrorMessage();
        var keyErrorMap = new form_validation_1.ValidationKeyErrorMap(this.validator.key, new form_validation_1.ValidationError(errorMessage));
        this.keyErrorMaps.push(keyErrorMap);
        return this.formControlBuilder;
    };
    ValidationKeyErrorMapBuilder.prototype.getErrorMessage = function () {
        var result;
        if (this._customErrorMessage !== null) {
            result = this._customErrorMessage;
        }
        else {
            result = this.validator.defaultErrorMessage;
        }
        return result;
    };
    return ValidationKeyErrorMapBuilder;
}());
exports.ValidationKeyErrorMapBuilder = ValidationKeyErrorMapBuilder;
//# sourceMappingURL=validation-key-error-map-builder.js.map