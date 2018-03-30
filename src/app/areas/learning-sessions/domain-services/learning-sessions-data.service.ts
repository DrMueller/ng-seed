import { Injectable } from '@angular/core';
import { ObjectUtils } from 'app/infrastructure/utils';

import { LearningSessionsHttpService } from '../app-services';
import { LearningSession } from '../models';

@Injectable()
export class LearningSessionsDataService {
  private readonly relativeUrl = 'learning-sessions';

  public async saveLearningSessionAsync(fact: LearningSession): Promise<void> {
    if (ObjectUtils.isNullOrUndefined(fact.id)) {
      this.httpService.putAsync(this.relativeUrl, fact);
    } else {
      this.httpService.postAsync(this.relativeUrl, fact);
    }
  }

  public loadAllLearningSessionsAsync(): Promise<LearningSession[]> {
    return this.httpService.getArrayAsync(this.relativeUrl, LearningSession);
  }

  public loadLearningSessionByIdAsync(id: string): Promise<LearningSession> {
    const url = this.relativeUrl + '/' + id;
    return this.httpService.getAsync(url, LearningSession);
  }

  public deleteLearningSessionAsync(id: string): Promise<void> {
    const url = this.relativeUrl + '/' + id;
    return this.httpService.deleteAsync(url);
  }

  constructor(private httpService: LearningSessionsHttpService) { }
}
