import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AgGridModule } from 'ag-grid-angular/main';
import { EditorModule, SharedModule } from 'primeng/primeng';

import { RxFormsModule } from 'app/infrastructure/shared-features/rx-forms';
import { CollapsibleCardModule } from 'app/infrastructure/widgets/collapsible-card';
import { SelectModule } from 'app/infrastructure/widgets/select';

import * as components from './components';
import * as appServices from './app-services';
import * as domainServices from './domain-services';
import { FactsRoutingModule } from './facts-routing.module';
import * as resolvers from './resolvers';

@NgModule({
  imports: [
    CommonModule,
    FactsRoutingModule,
    CollapsibleCardModule,
    SelectModule,
    EditorModule,
    SharedModule,
    RxFormsModule,
    AgGridModule.withComponents([
    ])
  ],
  declarations: [
    components.FactsComponent,
    components.FactsOverviewComponent,
    components.FactEditComponent
  ],
  providers: [
    appServices.FactsHttpService,
    appServices.FactsNavigationService,
    domainServices.FactsDataService,
    resolvers.FactEditResolver
  ]
})
export class FactsModule { }
