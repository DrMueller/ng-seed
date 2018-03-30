import { Injectable } from '@angular/core';

import { AppNavigationEntry } from '../models';

@Injectable()
export class AppNavigationService {

  constructor() { }

  public getNavigationEntries(): AppNavigationEntry[] {
    const result = new Array<AppNavigationEntry>();

    result.push(new AppNavigationEntry('Home', '/home'));
    result.push(new AppNavigationEntry('Playground', '/playground'));

    return result;
  }
}
