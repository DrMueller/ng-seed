import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { EnumService } from './enums';
import { EnvironmentService } from './environment';
import { EventDispatcherService } from './event-dispatching';
import * as http from './http';
import { ObjectFactoryService } from './object-creation';
import { ToastConfigurationService, ToastService } from './toast/services';
import { AppInfoService } from './app-info';

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
    ObjectFactoryService,
    EnumService,
    AppInfoService
  ]
})
export class CoreServicesModule { }
