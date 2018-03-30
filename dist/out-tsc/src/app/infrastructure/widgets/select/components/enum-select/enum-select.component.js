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
var enums_1 = require("app/infrastructure/core-services/enums");
var EnumSelectComponent = /** @class */ (function () {
    function EnumSelectComponent(enumService) {
        this.enumService = enumService;
        this.itemChanged = new core_1.EventEmitter();
        this._formChangeCallback = function (_) { };
    }
    EnumSelectComponent_1 = EnumSelectComponent;
    Object.defineProperty(EnumSelectComponent.prototype, "enumType", {
        set: function (enumType) {
            var enumKeyValues = this.enumService.getKeyValues(enumType);
            this.selectItems = enumKeyValues.map(function (f) {
                var selectItem = {
                    label: f.value,
                    value: f.key
                };
                return selectItem;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnumSelectComponent.prototype, "selectedItem", {
        set: function (value) {
            this.selectedSelectItemId = value;
        },
        enumerable: true,
        configurable: true
    });
    EnumSelectComponent.prototype.onItemChanged = function () {
        this.broadcastChange();
    };
    EnumSelectComponent.prototype.registerOnChange = function (fn) {
        this._formChangeCallback = fn;
        this.broadcastChange();
    };
    EnumSelectComponent.prototype.registerOnTouched = function () { };
    EnumSelectComponent.prototype.setDisabledState = function () { };
    EnumSelectComponent.prototype.writeValue = function (obj) {
        this.selectedSelectItemId = obj;
    };
    EnumSelectComponent.prototype.broadcastChange = function () {
        this.itemChanged.emit(this.selectedSelectItemId);
        this._formChangeCallback(this.selectedSelectItemId);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], EnumSelectComponent.prototype, "itemChanged", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EnumSelectComponent.prototype, "enumType", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], EnumSelectComponent.prototype, "selectedItem", null);
    EnumSelectComponent = EnumSelectComponent_1 = __decorate([
        core_1.Component({
            selector: 'app-enum-select',
            templateUrl: './enum-select.component.html',
            styleUrls: ['./enum-select.component.scss'],
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return EnumSelectComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [enums_1.EnumService])
    ], EnumSelectComponent);
    return EnumSelectComponent;
    var EnumSelectComponent_1;
}());
exports.EnumSelectComponent = EnumSelectComponent;
//# sourceMappingURL=enum-select.component.js.map