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
var forms_1 = require("@angular/forms");
var utils_1 = require("app/infrastructure/utils");
var models_1 = require("../../models");
var SelectComponent = /** @class */ (function () {
    function SelectComponent() {
        this.itemChanged = new core_1.EventEmitter();
        this._formChangeCallback = function (_) { };
    }
    SelectComponent_1 = SelectComponent;
    Object.defineProperty(SelectComponent.prototype, "items", {
        set: function (value) {
            this._businessItems = value;
            this.setItemsIfReady();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "configuration", {
        set: function (config) {
            this._configuration = config;
            this.setItemsIfReady();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "selectedItem", {
        set: function (value) {
            if (!utils_1.ObjectUtils.isNullOrUndefined(value)) {
                this.selectedItemId = value[this._configuration.idPropertyName];
            }
            else {
                this.selectedItemId = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    SelectComponent.prototype.onItemChanged = function () {
        this.broadcastChange();
    };
    SelectComponent.prototype.writeValue = function (obj) {
        if (utils_1.ObjectUtils.isNullOrUndefined(obj)) {
            this.selectedItemId = this.selectItems[0].value;
        }
        else {
            this.selectedItemId = obj[this._configuration.idPropertyName];
        }
    };
    SelectComponent.prototype.registerOnChange = function (fn) {
        this._formChangeCallback = fn;
        this.broadcastChange();
    };
    SelectComponent.prototype.registerOnTouched = function () { };
    SelectComponent.prototype.setDisabledState = function () { };
    SelectComponent.prototype.setItemsIfReady = function () {
        var _this = this;
        if (this._configuration) {
            if (this._businessItems) {
                this.selectItems = this._businessItems.map(function (f) { return _this.mapToSelectItem(f); });
            }
            else {
                this.selectItems = [];
            }
        }
    };
    SelectComponent.prototype.broadcastChange = function () {
        var businessItem = this.getBusinessItemFromSelection();
        this.itemChanged.emit(businessItem);
        this._formChangeCallback(businessItem);
    };
    SelectComponent.prototype.getBusinessItemFromSelection = function () {
        var businessItem;
        if (this.selectedItemId) {
            businessItem = this.mapToBusinessItem();
        }
        else {
            businessItem = undefined;
        }
        return businessItem;
    };
    SelectComponent.prototype.mapToSelectItem = function (item) {
        var id = item[this._configuration.idPropertyName];
        var text = item[this._configuration.displayTextPropertyName];
        return {
            label: text,
            value: id
        };
    };
    SelectComponent.prototype.mapToBusinessItem = function () {
        var _this = this;
        var businessItemById = this._businessItems.find(function (item) {
            var id = item[_this._configuration.idPropertyName];
            return id === _this.selectedItemId;
        });
        if (!businessItemById) {
            throw Error('mapFromSelectItem critical error');
        }
        return businessItemById;
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], SelectComponent.prototype, "itemChanged", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], SelectComponent.prototype, "items", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", models_1.SelectConfiguration),
        __metadata("design:paramtypes", [models_1.SelectConfiguration])
    ], SelectComponent.prototype, "configuration", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SelectComponent.prototype, "selectedItem", null);
    SelectComponent = SelectComponent_1 = __decorate([
        core_1.Component({
            selector: 'app-select',
            templateUrl: './select.component.html',
            styleUrls: ['./select.component.scss'],
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return SelectComponent_1; }),
                    multi: true
                }
            ]
        })
    ], SelectComponent);
    return SelectComponent;
    var SelectComponent_1;
}());
exports.SelectComponent = SelectComponent;
//# sourceMappingURL=select.component.js.map