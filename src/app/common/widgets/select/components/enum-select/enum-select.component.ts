import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MdSelectChange } from '@angular/material';

import { INameValuePair } from 'app/common/types/interfaces';
import { EnumUtilities, JsObjUtilities } from 'app/common/utilities';

import { SelectConfiguration, ControlPropagationStrategy } from 'app/common/widgets/select';

@Component({
  selector: 'app-enum-select',
  templateUrl: './enum-select.component.html',
  styleUrls: ['./enum-select.component.scss']
})
export class EnumSelectComponent implements OnInit, ControlValueAccessor {
  states = [{ code: 'AL', name: 'Alabama' }];

  private _enum: any;

  public nameValuePairs: INameValuePair<number>[] = [];
  public selection;

  @Output() public itemChanged = new EventEmitter<any>();

  @Input() public set selectedItem(value: number) {
    // this.internalSelectedItemValue = value;

    if (value) {
      this.selection = 0;
    }
  }

  @Input() placeholderText: string;

  @Input() public set enum(value: any) {
    this._enum = value;
    this.nameValuePairs = EnumUtilities.getNamesAndValues(value);
  }

  private _propagateChange = (_: any) => { };

  constructor() { }

  ngOnInit() {
  }

  public selectItemChanged(mdSelectChange: MdSelectChange) {
    // let selectedEnum: any;

    // if (!JsObjUtilities.isNullOrUndefined(mdSelectChange.value)) {
    //   selectedEnum = this.getEnumByIndex(mdSelectChange.value);
    // }

    this.propagateChange(mdSelectChange.value);
  }

  writeValue(obj: any): void {

  }

  registerOnChange(fn: any): void {
    this._propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    // Not needed atm
  }

  setDisabledState(isDisabled: boolean): void {
    // Not needed atm
  }

  // private getEnumByIndex(value: number): any | undefined {
  //   if (JsObjUtilities.isNullOrUndefined(value)) {
  //     return undefined;
  //   }

  //   const nameValuePair = this.nameValuePairs.find(f => f.value === value);
  //   const result = this._enum[nameValuePair!.name];
  //   return result;
  // }

  private propagateChange(item: any): void {
    this.itemChanged.emit(item);
    this._propagateChange(item);
  }
}
