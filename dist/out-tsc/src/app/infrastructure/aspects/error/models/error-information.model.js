"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorInformation = /** @class */ (function () {
    function ErrorInformation(errorName, errorMessage) {
        this.errorName = errorName;
        this.errorMessage = errorMessage;
    }
    ErrorInformation.createEmpty = function () {
        return new ErrorInformation('', '');
    };
    return ErrorInformation;
}());
exports.ErrorInformation = ErrorInformation;
//# sourceMappingURL=error-information.model.js.map