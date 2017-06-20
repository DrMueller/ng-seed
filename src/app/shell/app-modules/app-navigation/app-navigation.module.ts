import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import * as serv from './services';

@NgModule({
  exports: [
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
  ],
  providers: [
    serv.AppNavigationService
  ]
})
export class AppNavigationModule { }
