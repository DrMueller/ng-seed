/// <reference path="../../../../node_modules/reflect-metadata/Reflect.d.ts" />.

import { CTOR_PROP_KEY_PREFIX, CTOR_ARR_PROP_KEY_PREFIX } from '../decorators';
import { IParameterlessConstructor } from '../types/interfaces';
import { JsObjUtilities } from '.';

export class JsObjFactory {
  public static create<T>(source: any, ctorFn: IParameterlessConstructor<T>): T {
    const result = new ctorFn();
    this.mapDefinedProperties(source, result);

    return result;
  }

  public static createArray<T>(sourceCollection: any[], ctorFn: IParameterlessConstructor<T>): T[] {
    const result = new Array<T>();
    sourceCollection.forEach(sourceItem => {
      const mappedItem = new ctorFn();
      this.mapDefinedProperties(sourceItem, mappedItem);
      result.push(mappedItem);
    });

    return result;
  }

  private static mapDefinedProperties<T>(source: Object, target: T): void {
    const targetProperties = Object.getOwnPropertyNames(target);

    targetProperties.forEach(targetPropKey => {
      if (source.hasOwnProperty(targetPropKey)) {
        const sourceProp = this.getSourceProperty(target, source, targetPropKey);
        target[targetPropKey] = sourceProp;

      }
    });
  }

  private static getSourceProperty<T>(target: T, source: any, targetPropKey: string): any {
    const sourceProp = source[targetPropKey];

    const newObj = this.tryCreatingConstructableObject(target, sourceProp, targetPropKey);
    if (!JsObjUtilities.isNullOrUndefined(newObj)) {
      return newObj;
    }

    return sourceProp;
  }

  private static tryCreatingConstructableObject<T>(target: T, sourceProp: any, targetPropKey: string): any | null {
    const keyToCheck = `${CTOR_PROP_KEY_PREFIX}_${targetPropKey}`;
    const ctor = Reflect.getMetadata(keyToCheck, target);

    if (!JsObjUtilities.isNullOrUndefined(ctor)) {
      if (sourceProp instanceof Array) {

        const result = new Array();
        const sourceArray = <Array<any>>sourceProp;

        sourceArray.forEach(sourceElement => {
          const targetObj = new ctor();
          this.mapDefinedProperties(sourceElement, targetObj);
          result.push(targetObj);
        });

        return result;
      } else {
        const targetObj = new ctor();
        this.mapDefinedProperties(sourceProp, targetObj);
        return targetObj;
      }
    }

    return null;
  }
}
