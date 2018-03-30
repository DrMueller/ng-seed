import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { Fact } from '../models';
import { FactsDataService } from '../domain-services';

@Injectable()
export class FactEditResolver implements Resolve<Promise<Fact>> {

  public constructor(
    private factsDataService: FactsDataService) { }

  public async resolve(route: ActivatedRouteSnapshot): Promise<Fact> {
    var factId = route.paramMap.get('factId');
    if (!factId || factId === '-1') {
      return Promise.resolve(new Fact());
    }

    var fact = await this.factsDataService.loadFactbyIdAsync(factId);
    return fact;
  }
}
