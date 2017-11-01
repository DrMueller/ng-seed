"use strict";
/// <reference path="../../../../../../node_modules/reflect-metadata/Reflect.d.ts" />.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var utils_1 = require("app/infrastructure/utils");
var decorators_1 = require("../decorators");
var ObjectFactoryService = /** @class */ (function () {
    function ObjectFactoryService() {
    }
    ObjectFactoryService.prototype.create = function (source, ctorFn) {
        var result = new ctorFn();
        this.mapDefinedProperties(source, result);
        return result;
    };
    ObjectFactoryService.prototype.createArray = function (sourceCollection, ctorFn) {
        var _this = this;
        var result = new Array();
        sourceCollection.forEach(function (sourceItem) {
            var mappedItem = new ctorFn();
            _this.mapDefinedProperties(sourceItem, mappedItem);
            result.push(mappedItem);
        });
        return result;
    };
    ObjectFactoryService.prototype.mapDefinedProperties = function (source, target) {
        var _this = this;
        var targetProperties = Object.getOwnPropertyNames(target);
        targetProperties.forEach(function (targetPropKey) {
            if (source.hasOwnProperty(targetPropKey)) {
                var sourceProp = _this.getSourceProperty(target, source, targetPropKey);
                target[targetPropKey] = sourceProp;
            }
        });
    };
    ObjectFactoryService.prototype.getSourceProperty = function (target, source, targetPropKey) {
        var _this = this;
        var sourceProp = source[targetPropKey];
        var ctor = Reflect.getMetadata(decorators_1.CTOR_PROP_KEY_PREFIX, target, targetPropKey);
        if (utils_1.ObjectUtils.isNullOrUndefined(ctor)) {
            return sourceProp;
        }
        if (sourceProp instanceof Array) {
            var result_1 = new Array();
            var sourceArray = sourceProp;
            sourceArray.forEach(function (sourceElement) {
                var targetObj = new ctor();
                _this.mapDefinedProperties(sourceElement, targetObj);
                result_1.push(targetObj);
            });
            return result_1;
        }
        else {
            var targetObj = new ctor();
            this.mapDefinedProperties(sourceProp, targetObj);
            return targetObj;
        }
    };
    ObjectFactoryService = __decorate([
        core_1.Injectable()
    ], ObjectFactoryService);
    return ObjectFactoryService;
}());
exports.ObjectFactoryService = ObjectFactoryService;
//# sourceMappingURL=object-factory.service.js.map