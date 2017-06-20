import { Injectable } from '@angular/core';

import { ErrorInformation } from '../models';
import { ErrorDisplayService, ErrorRegistrationService } from '.';


@Injectable()
export class ErrorAppInitializationService {

  constructor(private errorDisplayService: ErrorDisplayService, private errorRegistrationService: ErrorRegistrationService) { }

  public initialize(): void {
    this.errorRegistrationService.registerErrorCallback((errorInformation: ErrorInformation) => {
      this.errorDisplayService.showError(errorInformation);
    });
  }
}
