import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { LearningSession } from '../models';
import { LearningSessionsDataService } from '../domain-services';

@Injectable()
export class LearningSessionResolver implements Resolve<Promise<LearningSession>> {

  public constructor(
    private dataService: LearningSessionsDataService) { }

  public async resolve(route: ActivatedRouteSnapshot): Promise<LearningSession> {
    var id = route.paramMap.get('learningSessionId');
    if (!id || id === '-1') {
      return Promise.resolve(new LearningSession());
    }

    var learningSession = await this.dataService.loadLearningSessionByIdAsync(id);
    return learningSession;
  }
}
