import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningSessionsRoutingModule } from './learning-sessions-routing.module';

import * as components from './components';
import * as appServices from './app-services';
import * as domainServices from './domain-services';

@NgModule({
  imports: [
    CommonModule,
    LearningSessionsRoutingModule
  ],
  declarations: [
    components.LearningSessionEditComponent,
    components.LearningSessionsOverviewComponent,
    components.LearningSessionsComponent
  ],
  providers: [
    appServices.LearningSessionsHttpService,
    appServices.LearningSessionsNavigationService,
    domainServices.LearningSessionsDataService
  ]
})
export class LearningSessionsModule { }
