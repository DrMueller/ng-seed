"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_change_type_enum_1 = require("../models/array-change-type.enum");
var ObservableArrayProxyHandler = /** @class */ (function () {
    function ObservableArrayProxyHandler(callback) {
        this.callback = callback;
    }
    ObservableArrayProxyHandler.prototype.set = function (target, p, value, _receiver) {
        this._array = target.map(function (x) { return Object.assign({}, x); });
        target[p] = value;
        this.checkInsert(target, p, value);
        this.checkDelete(target, p, value);
        return true;
    };
    ObservableArrayProxyHandler.prototype.checkDelete = function (target, p, value) {
        if (p.toString() === 'length') {
            var numberValue = Number(value);
            if (this._array.length > numberValue) {
                this.onCallback(target, p, value, array_change_type_enum_1.ArrayChangeType.EntryDeleted);
            }
        }
    };
    ObservableArrayProxyHandler.prototype.checkInsert = function (target, p, value) {
        var numberValue = Number(p);
        if (numberValue.toString() !== 'Nan') {
            if (numberValue === this._array.length) {
                this.onCallback(target, p, value, array_change_type_enum_1.ArrayChangeType.EntryInserted);
            }
        }
    };
    ObservableArrayProxyHandler.prototype.onCallback = function (target, p, value, changeType) {
        this.callback(target, p, value, changeType);
    };
    return ObservableArrayProxyHandler;
}());
exports.ObservableArrayProxyHandler = ObservableArrayProxyHandler;
//# sourceMappingURL=observable-array-proxy.handler.js.map