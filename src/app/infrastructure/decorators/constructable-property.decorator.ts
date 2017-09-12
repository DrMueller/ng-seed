/// <reference path="../../../../node_modules/reflect-metadata/Reflect.d.ts" />.

import { IParameterlessConstructor } from '../types/interfaces';

export const CTOR_PROP_KEY_PREFIX = 'ConstructableProperty';

export function ConstructableProperty<T>(ctor: IParameterlessConstructor<T>) {
  return function (target: object, propertyKey: string) {
    const key = `${CTOR_PROP_KEY_PREFIX}_${propertyKey}`;
    Reflect.defineMetadata(key, ctor, target);
  }
}
