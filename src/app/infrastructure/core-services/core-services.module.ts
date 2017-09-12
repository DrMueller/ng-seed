import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { EnvironmentService } from './environment';
import { ToastService, ToastConfigurationService } from './toast/services';
import { EventDispatcherService } from './event-dispatching';
import * as http from './http';
import { ObjectFactoryService } from './object-creation';

// Not adding the mediators as providers here, since they should be used in the components

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
    http.PlaygroundHttpService,
    ObjectFactoryService
  ]
})
export class CoreServicesModule { }
