import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorModule, SharedModule } from 'primeng/primeng';

import { CollapsibleCardModule } from '../../common/widgets/collapsible-card';
import { SelectModule } from '../../common/widgets/select';
import { RxFormsModule } from '../../common/widgets/rx-forms';

import * as comp from './components';
import * as serv from './services';
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
    comp.PlaygroundServerPostComponent
  ],
  providers: [
    serv.PlaygroundHttpService,
    serv.PlaygroundIndividualService
  ]
})
export class PlaygroundModule { }
