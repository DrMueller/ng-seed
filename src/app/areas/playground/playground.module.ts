import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorModule, SharedModule } from 'primeng/primeng';

import { CollapsibleCardModule } from '../../common/widgets/collapsible-card';
import { SelectModule } from '../../common/widgets/select';
import { RxFormsModule } from '../../common/widgets/rx-forms';

import * as comp from './components';
import * as serv from './services';

import { PlaygroundRoutingModule } from './playground-routing.module';
import { PgOrgAddressComponent } from './components/playground-comp-communication/components/pg-org-address/pg-org-address.component';



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
    PgOrgAddressComponent
  ],
  providers: [
    serv.PlaygroundHttpService,
    serv.PlaygroundIndividualService
  ]
})
export class PlaygroundModule { }
