import { GridOptions } from 'ag-grid';

import { ObservableArrayProxyHandler, ObversableProxyHandler } from '../handlers';
import { ArrayChangeType } from './array-change-type.enum';

export class Grid<T extends object> {
  private readonly _entries: T[];
  private _isGridReady = false;

  public get entries(): T[] {
    return this._entries;
  }

  constructor(public gridOptions: GridOptions) {
    gridOptions.onGridReady = this.gridReady.bind(this);
    const proxyHandler = new ObservableArrayProxyHandler<T[]>(this.gridArrayChanged.bind(this));
    this._entries = new Proxy(new Array<T>(), proxyHandler);
    this.updateRowDataWhenGridReady();
  }

  public gridEntryChanged(_target: T, _p: PropertyKey, _value: any, _receiver: any): void {
    this.updateRowDataWhenGridReady();
  }

  private gridReady(): void {
    this._isGridReady = true;
  }

  private updateRowDataWhenGridReady(): void {
    if (this._isGridReady) {
      this.gridOptions.api!.setRowData(this._entries);
    } else {
      const interval = setInterval(() => {
        if (this._isGridReady) {
          clearInterval(interval);
          this.gridOptions.api!.setRowData(this._entries);
        }
      }, 100);
    }
  }

  private createProxy(entry: T): T {
    const entryProxyHandler = new ObversableProxyHandler<T>(this.gridEntryChanged.bind(this));
    const proxy = new Proxy(entry, entryProxyHandler);
    return proxy;
  }

  private gridArrayChanged(_target: T, p: PropertyKey, value: any, changeType: ArrayChangeType): void {
    if (changeType === ArrayChangeType.EntryInserted) {
      this._entries[p] = this.createProxy(value);
    }

    this.updateRowDataWhenGridReady();
  }
}