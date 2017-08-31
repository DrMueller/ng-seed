import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AppNavigationEntry } from '../models';

@Injectable()
export class AppNavigationService {

  constructor(private router: Router) { }

  public getNavigationEntries(): AppNavigationEntry[] {
    const result = new Array<AppNavigationEntry>();

    result.push(new AppNavigationEntry('Home', '/home'));
    result.push(new AppNavigationEntry('Playground', '/playground'));

    return result;
  }
}
