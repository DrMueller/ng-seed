"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Address = /** @class */ (function () {
    function Address() {
        this.streetName = undefined;
        this.streetNumber = undefined;
    }
    Address.prototype.getCompleteStreet = function () {
        return "StreetName: " + this.streetName + ". StreetNumber: " + this.streetNumber;
    };
    return Address;
}());
exports.Address = Address;
//# sourceMappingURL=address.model.js.map