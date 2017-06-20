import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as md from '@angular/material';

import * as comp from './components';

@NgModule({
  exports: [
    comp.MdSelectComponent
  ],
  imports: [
    CommonModule,
    md.MdSelectModule
  ],
  declarations: [
    comp.MdSelectComponent
  ]
})
export class MdSelectModule { }
