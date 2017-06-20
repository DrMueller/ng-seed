import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdSelectModule } from '@angular/material';

import * as comp from './components';

@NgModule({
  exports: [
    comp.SelectComponent,
    comp.EnumSelectComponent
  ],
  imports: [
    CommonModule,
    MdSelectModule,
    FormsModule
  ],
  declarations: [
    comp.SelectComponent,
    comp.EnumSelectComponent
  ]
})
export class SelectModule { }
