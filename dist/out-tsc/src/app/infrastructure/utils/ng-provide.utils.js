"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NgProvideUtils = /** @class */ (function () {
    function NgProvideUtils() {
    }
    NgProvideUtils.provideValue = function (provide, useValue, multi) {
        return {
            multi: multi,
            provide: provide,
            useValue: useValue
        };
    };
    NgProvideUtils.provideClass = function (provide, useClass, multi) {
        return {
            multi: multi,
            provide: provide,
            useClass: useClass
        };
    };
    return NgProvideUtils;
}());
exports.NgProvideUtils = NgProvideUtils;
//# sourceMappingURL=ng-provide.utils.js.map