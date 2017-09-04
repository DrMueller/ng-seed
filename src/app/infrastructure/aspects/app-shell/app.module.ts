// external-core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// third-parties
import { AgGridModule } from 'ag-grid-angular/main';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// app-modules
import { AppNavigationModule } from '../app-navigation';
import { ErrorModule } from '../error';

// core-services
import { CoreServicesModule } from 'app/infrastructure/core-services';

// widgets
import { RxFormsModule } from 'app/infrastructure/widgets/rx-forms';

// app
import { AppComponent, AppRoutingModule } from '.';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    CoreServicesModule,
    RxFormsModule.forRoot(),
    AppNavigationModule,
    ErrorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
