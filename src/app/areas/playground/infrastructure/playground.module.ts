import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorModule, SharedModule } from 'primeng/primeng';

import { CollapsibleCardModule } from 'app/infrastructure/widgets/collapsible-card';
import { SelectModule } from 'app/infrastructure/widgets/select';
import { RxFormsModule } from 'app/infrastructure/widgets/rx-forms';

import * as comp from '../domain/components';
import * as serv from '../domain/services';

import { PlaygroundRoutingModule } from './playground-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PlaygroundRoutingModule,
    CollapsibleCardModule,
    SelectModule,
    EditorModule,
    SharedModule,
    RxFormsModule
  ],
  declarations: [
    comp.PlaygroundComponent,
    comp.PlaygroundOverviewComponent,
    comp.PlaygroundCollapsibleCardComponent,
    comp.PlaygroundSelectComponent,
    comp.PlaygroundPrimengEditorComponent,
    comp.PlaygroundRxFormComponent,
    comp.PlaygroundEnumSelectComponent,
    comp.PlaygroundErrorComponent,
    comp.PlaygroundRxFormControlWithValidationComponent,
    comp.PlaygroundServerGetComponent,
    comp.PlaygroundServerPostComponent,
    comp.PgOrgMainComponent,
    comp.PgOrgAddressComponent,
    comp.PgOrgHqComponent,
    comp.PgOrgAddressComponent
  ],
  providers: [
    serv.PlaygroundIndividualService
  ]
})
export class PlaygroundModule { }
