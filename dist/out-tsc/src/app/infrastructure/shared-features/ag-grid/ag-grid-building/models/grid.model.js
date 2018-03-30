"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_array_proxy_handler_1 = require("../handlers/observable-array-proxy.handler");
var obversable_proxy_handler_1 = require("../handlers/obversable-proxy.handler");
var array_change_type_enum_1 = require("./array-change-type.enum");
var Grid = /** @class */ (function () {
    function Grid(gridOptions) {
        this.gridOptions = gridOptions;
        this._isGridReady = false;
        gridOptions.onGridReady = this.gridReady.bind(this);
        var proxyHandler = new observable_array_proxy_handler_1.ObservableArrayProxyHandler(this.gridArrayChanged.bind(this));
        this._entries = new Proxy(new Array(), proxyHandler);
        this.updateRowDataWhenGridReady();
    }
    Object.defineProperty(Grid.prototype, "entries", {
        get: function () {
            return this._entries;
        },
        enumerable: true,
        configurable: true
    });
    Grid.prototype.gridEntryChanged = function (_target, _p, _value, _receiver) {
        this.updateRowDataWhenGridReady();
    };
    Grid.prototype.createProxy = function (entry) {
        var entryProxyHandler = new obversable_proxy_handler_1.ObversableProxyHandler(this.gridEntryChanged.bind(this));
        var proxy = new Proxy(entry, entryProxyHandler);
        return proxy;
    };
    Grid.prototype.gridArrayChanged = function (_target, p, value, changeType) {
        if (changeType === array_change_type_enum_1.ArrayChangeType.EntryInserted) {
            this._entries[p] = this.createProxy(value);
        }
        this.updateRowDataWhenGridReady();
    };
    Grid.prototype.gridReady = function () {
        this._isGridReady = true;
    };
    Grid.prototype.updateRowDataWhenGridReady = function () {
        var _this = this;
        if (this._isGridReady) {
            this.gridOptions.api.setRowData(this._entries);
        }
        else {
            var interval_1 = setInterval(function () {
                if (_this._isGridReady) {
                    clearInterval(interval_1);
                    _this.gridOptions.api.setRowData(_this._entries);
                }
            }, 100);
        }
    };
    return Grid;
}());
exports.Grid = Grid;
//# sourceMappingURL=grid.model.js.map