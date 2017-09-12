/// <reference path="../../../../node_modules/reflect-metadata/Reflect.d.ts" />.

import { IParameterlessConstructor } from '../types/interfaces';

export const CTOR_ARR_PROP_KEY_PREFIX = 'ConstructableArrayProperty';

export function ConstructableArrayProperty<T>(ctor: IParameterlessConstructor<T>) {
  return function (target: object, propertyKey: string) {
    const key = `${CTOR_ARR_PROP_KEY_PREFIX}_${propertyKey}`;
    Reflect.defineMetadata(key, ctor, target);
  }
}
