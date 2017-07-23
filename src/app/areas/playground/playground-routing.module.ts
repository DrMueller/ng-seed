import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as comp from './components';

const routes: Routes = [
  {
    path: '',
    component: comp.PlaygroundComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: comp.PlaygroundOverviewComponent },
      { path: 'cc', component: comp.PlaygroundCollapsibleCardComponent },
      { path: 'select', component: comp.PlaygroundSelectComponent },
      { path: 'enum-select', component: comp.PlaygroundEnumSelectComponent },
      { path: 'primeng-editor', component: comp.PlaygroundPrimengEditorComponent },
      { path: 'rx-validation', component: comp.PlaygroundRxFormComponent },
      { path: 'rx-fc', component: comp.PlaygroundRxFormControlWithValidationComponent },
      { path: 'error', component: comp.PlaygroundErrorComponent },
      { path: 'server-get', component: comp.PlaygroundServerGetComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaygroundRoutingModule { }


