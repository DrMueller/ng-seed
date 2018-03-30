"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventListenerDictonary = /** @class */ (function () {
    function EventListenerDictonary() {
        this._listeners = new Array();
    }
    EventListenerDictonary.prototype.addListener = function (listener) {
        this._listeners.push(listener);
    };
    EventListenerDictonary.prototype.removeListener = function (listener) {
        var index = this._listeners.indexOf(listener);
        if (index > -1) {
            this._listeners.splice(index, 1);
        }
    };
    EventListenerDictonary.prototype.getListeners = function (eventName) {
        var result = this._listeners.filter(function (f) { return f.eventName === eventName; });
        return result;
    };
    return EventListenerDictonary;
}());
exports.EventListenerDictonary = EventListenerDictonary;
//# sourceMappingURL=event-listener-dictionary.model.js.map