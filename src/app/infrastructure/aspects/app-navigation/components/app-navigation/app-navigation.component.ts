import { Component, OnInit } from '@angular/core';

import { AppInfoService, ApplicationInformation } from 'app/infrastructure/core-services/app-info';

import { AppNavigationEntry } from '../../models';
import { AppNavigationService } from '../../services';

@Component({
  selector: 'app-app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.scss']
})
export class AppNavigationComponent implements OnInit {
  public applicationInformation: ApplicationInformation;
  public appNavigationEntries: AppNavigationEntry[] = [];

  public constructor(private appNavigationService: AppNavigationService, private appInfoService: AppInfoService) { }

  public async ngOnInit(): Promise<void> {
    this.appNavigationEntries = this.appNavigationService.getNavigationEntries();
    this.applicationInformation = await this.appInfoService.getAppInfoAsync();
  }

}
