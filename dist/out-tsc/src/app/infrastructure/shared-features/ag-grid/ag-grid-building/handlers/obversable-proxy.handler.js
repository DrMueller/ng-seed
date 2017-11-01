"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObversableProxyHandler = /** @class */ (function () {
    function ObversableProxyHandler(callback) {
        this.callback = callback;
    }
    ObversableProxyHandler.prototype.set = function (target, p, value, receiver) {
        target[p] = value;
        this.callback(target, p, value, receiver);
        return true;
    };
    return ObversableProxyHandler;
}());
exports.ObversableProxyHandler = ObversableProxyHandler;
//# sourceMappingURL=obversable-proxy.handler.js.map