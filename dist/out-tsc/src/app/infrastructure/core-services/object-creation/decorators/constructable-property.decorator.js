"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CTOR_PROP_KEY_PREFIX = 'ConstructableProperty';
function ConstructableProperty(ctor) {
    return function (target, propertyKey) {
        Reflect.defineMetadata(exports.CTOR_PROP_KEY_PREFIX, ctor, target, propertyKey);
    };
}
exports.ConstructableProperty = ConstructableProperty;
//# sourceMappingURL=constructable-property.decorator.js.map