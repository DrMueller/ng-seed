import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as components from './components';
import * as resolvers from './resolvers';

const routes: Routes = [
  {
    path: '',
    component: components.LearningSessionsOverviewComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: components.LearningSessionsOverviewComponent },
      {
        path: ':learningSessionId', component: components.LearningSessionEditComponent, resolve:
          { learningSession: resolvers.LearningSessionResolver }
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LearningSessionsRoutingModule { }
