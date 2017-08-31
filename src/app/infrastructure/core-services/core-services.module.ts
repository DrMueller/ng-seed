import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { EnvironmentService } from './environment';
import { ToastService, ToastConfigurationService } from './toast/services';
import { EventDispatcherService } from './event-dispatching';
import * as http from './http';

// Not adding the mediators as providers here, since this should be used in the components

@NgModule({
  imports: [
    CommonModule,
    ToastModule.forRoot(),
    HttpModule
  ],
  providers: [
    EnvironmentService,
    ToastService,
    ToastConfigurationService,
    EventDispatcherService,
    http.PlaygroundHttpService
  ]
})
export class CoreServicesModule { }
