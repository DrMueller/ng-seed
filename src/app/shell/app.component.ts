import { Component, ViewChild, OnInit } from '@angular/core';

import { ErrorAppInitializationService } from './app-modules/error';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private errorAppInitializationService: ErrorAppInitializationService) {
    this.errorAppInitializationService.initialize();
  }

  ngOnInit(): void {
  }
}
