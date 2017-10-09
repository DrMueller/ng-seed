import { PropertyChangedCallback } from '../types';

export class ObversableProxyHandler<T extends object> implements ProxyHandler<T> {

  constructor(private callback: PropertyChangedCallback<T>) {
  }

  public set(target: T, p: PropertyKey, value: any, receiver: any): boolean {
    target[p] = value;
    this.callback(target, p, value, receiver);
    return true;
  }
}
