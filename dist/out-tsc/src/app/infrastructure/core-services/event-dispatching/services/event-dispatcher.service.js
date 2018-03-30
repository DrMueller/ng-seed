"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var models_1 = require("../models");
var EventDispatcherService = /** @class */ (function () {
    function EventDispatcherService() {
        this._dict = new models_1.EventListenerDictonary();
    }
    EventDispatcherService.prototype.registerListener = function (eventName, callback) {
        var entry = new models_1.EventListenerEntry(eventName, callback);
        this._dict.addListener(entry);
    };
    EventDispatcherService.prototype.notifyListeners = function (eventName, sender, parameters) {
        if (parameters === void 0) { parameters = null; }
        var listeners = this._dict.getListeners(eventName);
        listeners.forEach(function (l) {
            l.callback(sender, parameters);
        });
    };
    EventDispatcherService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], EventDispatcherService);
    return EventDispatcherService;
}());
exports.EventDispatcherService = EventDispatcherService;
//# sourceMappingURL=event-dispatcher.service.js.map