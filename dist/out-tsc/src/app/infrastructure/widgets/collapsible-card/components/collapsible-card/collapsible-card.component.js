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
var animations_1 = require("@angular/animations");
var core_1 = require("@angular/core");
var CollapsibleCardComponent = /** @class */ (function () {
    function CollapsibleCardComponent() {
        this.visibilityChanged = new core_1.EventEmitter();
        this._areDetailsVisible = true;
    }
    Object.defineProperty(CollapsibleCardComponent.prototype, "areDetailsVisible", {
        get: function () {
            return this._areDetailsVisible;
        },
        set: function (data) {
            this._areDetailsVisible = data;
        },
        enumerable: true,
        configurable: true
    });
    CollapsibleCardComponent.prototype.toggleVisibility = function () {
        this.areDetailsVisible = !this.areDetailsVisible;
        this.visibilityChanged.emit(this.areDetailsVisible);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CollapsibleCardComponent.prototype, "visibilityChanged", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], CollapsibleCardComponent.prototype, "areDetailsVisible", null);
    CollapsibleCardComponent = __decorate([
        core_1.Component({
            selector: 'app-collapsible-card',
            templateUrl: './collapsible-card.component.html',
            styleUrls: ['./collapsible-card.component.scss'],
            animations: [
                animations_1.trigger('detailsArrowAnimation', [
                    animations_1.state('1', animations_1.style({
                        transform: 'rotate(0deg)'
                    })),
                    animations_1.state('0', animations_1.style({
                        transform: 'rotate(180deg)'
                    })),
                    animations_1.transition('* => *', animations_1.animate('400ms ease-out'))
                ]),
                animations_1.trigger('detailsContentAnimation', [
                    animations_1.state('1', animations_1.style({
                        'height': '*',
                        'padding-top': '*',
                        'padding-bottom': '*'
                    })),
                    animations_1.state('0', animations_1.style({
                        'height': 0,
                        'padding-top': 0,
                        'padding-bottom': 0
                    })),
                    animations_1.transition('* => *', animations_1.animate('400ms ease-out'))
                ])
            ]
        })
    ], CollapsibleCardComponent);
    return CollapsibleCardComponent;
}());
exports.CollapsibleCardComponent = CollapsibleCardComponent;
//# sourceMappingURL=collapsible-card.component.js.map