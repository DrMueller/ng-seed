import { Injectable } from '@angular/core';

import { EnvironmentService } from 'app/infrastructure/core-services/environment';

import { AdalService } from 'adal-angular4';

import { SecurityUser } from '../models';


@Injectable()
export class UserSecurityService {
  constructor(
    private adalService: AdalService,
    private environmentService: EnvironmentService) { }

  public initialize(): void {
    const adalConfig = this.environmentService.adalConfig;
    this.adalService.init(adalConfig);
  }

  public getCurrentUser(): SecurityUser {
    if (this.adalService.userInfo.authenticated) {
      return new SecurityUser(
        this.adalService.userInfo.profile.unique_name,
        this.adalService.userInfo.authenticated);
    }

    return SecurityUser.createUnauthenticated();
  }

  public handleCallback(): void {
    this.adalService.handleWindowCallback();
    if (this.adalService.userInfo.error) {
      throw new Error(this.adalService.userInfo.error);
    }
  }

  public logOut(): void {
    this.adalService.logOut();
  }

  public logIn(): void {
    this.adalService.login();
  }
}
