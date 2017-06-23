import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as serv from './services';

@NgModule({
  exports: [
  ],
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  providers: [
    serv.AppNavigationService
  ]
})
export class AppNavigationModule { }
