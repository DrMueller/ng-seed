import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { SelectItem } from 'primeng/primeng'

import { JsObjUtilities } from 'app/common/utilities';

import { SelectConfiguration } from '../../models';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})

export class SelectComponent<T> implements ControlValueAccessor {
  private _businessItems: T[];
  private _configuration: SelectConfiguration;

  public selectedItemId: any;
  public selectItems: SelectItem[];

  @Output() public itemChanged = new EventEmitter<T>();

  @Input() public set items(value: T[]) {
    this._businessItems = value;
    this.setItemsIfReady();
  }

  @Input() public set configuration(config: SelectConfiguration) {
    this._configuration = config;
    this.setItemsIfReady();
  }

  @Input() public set selectedItem(value: T | null) {
    if (!JsObjUtilities.isNullOrUndefined(value)) {
      this.selectedItemId = value![this._configuration.idPropertyName];
    } else {
      this.selectedItemId = null;
    };
  }

  public get placeholderText(): string {
    return this._configuration.placeholderText;
  }

  public onItemChanged() {
    this.broadcastChange();
  }

  private _formChangeCallback = (_: any) => { };

  private broadcastChange(): void {
    const businessItem = this.getBusinessItemFromSelection();

    this.itemChanged.emit(businessItem);
    this._formChangeCallback(businessItem);
  }

  private getBusinessItemFromSelection(): T | undefined {
    let businessItem: T | undefined;
    if (this.selectedItemId) {
      businessItem = this.mapToBusinessItem();
    } else {
      businessItem = undefined;
    }

    return businessItem;
  }

  writeValue(obj: any): void {
    if (JsObjUtilities.isNullOrUndefined(obj)) {
      this.selectedItemId = this.selectItems[0].value;
    } else {
      this.selectedItemId = obj[this._configuration.idPropertyName];
    }
  }

  registerOnChange(fn: any): void {
    this._formChangeCallback = fn;
    this.broadcastChange();
  }

  registerOnTouched(fn: any): void {}

  setDisabledState(isDisabled: boolean): void {}

  private setItemsIfReady(): void {
    if (this._configuration) {
      if (this._businessItems) {
        this.selectItems = this._businessItems.map(f => this.mapToSelectItem(f));
      } else {
        this.selectItems = [];
      }
    }
  }

  private mapToSelectItem(item: T): SelectItem {
    const id = item[this._configuration.idPropertyName];
    const text = item[this._configuration.displayTextPropertyName];
    return <SelectItem>{
      label: text,
      value: id
    };
  }

  private mapToBusinessItem(): T {
    const businessItemById = this._businessItems.find(item => {
      const id = item[this._configuration.idPropertyName];
      return id === this.selectedItemId;
    });

    if (!businessItemById) {
      throw Error('mapFromSelectItem critical error');
    }

    return businessItemById;
  }
}
