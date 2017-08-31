import { NgModule, ModuleWithProviders, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgProvideUtilities } from 'app/infrastructure/utilities';

import * as comp from './components';
import * as serv from './services';

@NgModule({
  entryComponents: [
    comp.ErrorDisplayContentComponent
  ],
  imports: [
    CommonModule
  ],
  declarations: [
    comp.ErrorDisplayContentComponent
  ]
})
export class ErrorModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: ErrorModule,
      providers: [
        serv.ErrorRegistrationService,
        serv.ErrorDispatcherService,
        serv.ErrorDisplayService,
        serv.ErrorAppInitializationService,
        NgProvideUtilities.provideClass(ErrorHandler, serv.GlobalErrorCatcherService)
      ]
    };
  }
}
