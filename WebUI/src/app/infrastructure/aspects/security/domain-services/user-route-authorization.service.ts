import { Injectable } from '@angular/core';

import { UserSecurityService } from './user-security.service';

@Injectable()
export class UserRouteAuthorizationService {

  constructor(private userSecurityService: UserSecurityService) { }

  public isAuthorizedForRoute(route: string): boolean {
    if (route.startsWith('/')) {
      route = route.substr(1);
    }

    const currentUser = this.userSecurityService.getCurrentUser();
    if (!currentUser.isAuthenticated) {
      return route === 'home'; // Home is always allowed
    }

    return true;
  }
}
