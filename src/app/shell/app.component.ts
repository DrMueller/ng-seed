import { Component, ViewChild, OnInit, ViewContainerRef } from '@angular/core';

import { ErrorAppInitializationService } from './app-modules/error';
import { ToastConfigurationService } from 'app/common/core-services/toast/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private errorAppInitializationService: ErrorAppInitializationService,
    toastConfigurationService: ToastConfigurationService,
    viewContainerRef: ViewContainerRef) {
    this.errorAppInitializationService.initialize();
    toastConfigurationService.setContainer(viewContainerRef);
  }

  ngOnInit(): void {
  }
}
