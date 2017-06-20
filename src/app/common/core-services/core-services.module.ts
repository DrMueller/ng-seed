import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { HttpServiceResolverService } from './http';
import { EnvironmentService } from './environment';
import { ToastService, ToastConfigService } from './toast/services';
import { EventDispatcherService } from './event-dispatching';

@NgModule({
  imports: [
    CommonModule,
    ToastModule.forRoot()
  ],
  exports: [
  ],
  declarations: [],
  providers: [
    HttpServiceResolverService,
    EnvironmentService,
    ToastService,
    ToastConfigService,
    EventDispatcherService
  ]
})
export class CoreServicesModule { }
