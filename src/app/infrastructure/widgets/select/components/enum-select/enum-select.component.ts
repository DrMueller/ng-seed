import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { SelectItem } from 'primeng/primeng';

import { EnumUtils } from 'app/infrastructure/utils';

@Component({
  selector: 'app-enum-select',
  templateUrl: './enum-select.component.html',
  styleUrls: ['./enum-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EnumSelectComponent),
      multi: true
    }
  ]
})
export class EnumSelectComponent implements ControlValueAccessor {
  public selectedSelectItemId: number;
  public selectItems: SelectItem[];

  @Output() public itemChanged = new EventEmitter<any>();

  @Input() public set enum(value: any) {
    this.selectItems = EnumUtils.getNamesAndValues(value).map(f => {
      const selectItem = <SelectItem>{
        label: f.name,
        value: f.value
      };

      return selectItem;
    });
  }

  @Input() public set selectedItem(value: number) {
    this.selectedSelectItemId = value;
  }

  public onItemChanged() {
    this.broadcastChange();
  }

  public writeValue(obj: any): void {
    this.selectedSelectItemId = obj;
  }

  public registerOnChange(fn: any): void {
    this._formChangeCallback = fn;
    this.broadcastChange();
  }

  public registerOnTouched(): void { }

  public setDisabledState(): void { }

  private _formChangeCallback = (_: any) => { };

  private broadcastChange(): void {
    this.itemChanged.emit(this.selectedSelectItemId);
    this._formChangeCallback(this.selectedSelectItemId);
  }


}
