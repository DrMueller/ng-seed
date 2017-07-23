import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { EnvironmentService } from './environment';
import { ToastService, ToastConfigService } from './toast/services';
import { EventDispatcherService } from './event-dispatching';

@NgModule({
  imports: [
    CommonModule,
    ToastModule.forRoot(),
    HttpModule
  ],
  providers: [
    EnvironmentService,
    ToastService,
    ToastConfigService,
    EventDispatcherService
  ]
})
export class CoreServicesModule { }
