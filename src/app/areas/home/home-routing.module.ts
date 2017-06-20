import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as comp from './components';

const routes: Routes = [
  {
    path: '',
    component: comp.HomeComponent,
    children: [
      { path: '', redirectTo: 'hello', pathMatch: 'full' },
      { path: 'hello', component: comp.HelloNgComponent },
      // {
      //   path: 'offers/:id',
      //   component: comp.OfferDetailsComponent,
      //   resolve: { resolvedOfferEdit: serv.OfferEditResolverService }
      // }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule {
}
