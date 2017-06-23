import { Component, ViewChild, OnInit } from '@angular/core';

import { AppNavigationService, AppNavigationEntry } from './app-modules/app-navigation';
import { ErrorAppInitializationService } from './app-modules/error';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public appNavigationEntries: AppNavigationEntry[] = [];

  public get applicationTitle(): string {
    return 'DMSP';
  }

  constructor(private appNavigationService: AppNavigationService, private errorAppInitializationService: ErrorAppInitializationService) {
    this.errorAppInitializationService.initialize();
  }

  ngOnInit(): void {
    this.appNavigationEntries = this.appNavigationService.getNavigationEntries();
  }
}
