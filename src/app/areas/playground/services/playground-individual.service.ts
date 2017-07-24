import { Injectable } from '@angular/core';

import { Individual } from '../models';
import { PlaygroundHttpService } from '../services';

@Injectable()
export class PlaygroundIndividualService {

  constructor(private playgroundHttpservice: PlaygroundHttpService) { }

  public postIndividualAsync(individual: Individual): Promise<Individual> {
    const relativeUrl = 'Individuals';
    return this.playgroundHttpservice.postAsync(relativeUrl, individual, Individual);
  }

  public getIndividualsAsync(): Promise<Individual[]> {
    const relativeUrl = 'Individuals';
    return this.playgroundHttpservice.getArrayAsync(relativeUrl, Individual);
  }
}
