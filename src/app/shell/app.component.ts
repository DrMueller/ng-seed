import { Component, ViewChild, OnInit } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { trigger, style, transition, state, animate, keyframes } from '@angular/animations';

import { AppNavigationService, AppNavigationEntry } from './app-modules/app-navigation';
import { ErrorAppInitializationService } from './app-modules/error';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('sidebarArrowAnimation',
      [
        state('1', style(
          {
            transform: 'rotate(0deg)'
          })),
        state('0', style(
          {
            transform: 'rotate(180deg)'
          })),
        transition('* => *', animate('400ms ease-out'))
      ]),
  ]
})
export class AppComponent implements OnInit {
  public appNavigationEntries: AppNavigationEntry[] = [];

  public get applicationTitle(): string {
    return 'DrMuellers Angular Seed Project';
  }

  @ViewChild('sidenav') public sidenav: MdSidenav;

  public get isSidebarOpen(): boolean {
    return this.sidenav._isOpened;
  }

  constructor(private appNavigationService: AppNavigationService, private errorAppInitializationService: ErrorAppInitializationService) {
    this.errorAppInitializationService.initialize();
  }

  ngOnInit(): void {
    this.appNavigationEntries = this.appNavigationService.getNavigationEntries();
  }

  public openNavigationClicked(): void {
    this.sidenav.open();
  }

  public navigationClicked(): void {
    this.sidenav.close();
  }
}
