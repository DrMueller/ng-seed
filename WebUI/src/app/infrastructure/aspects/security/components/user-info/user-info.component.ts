import { Component } from '@angular/core';

import { UserSecurityService } from '../../domain-services';
import { SecurityUser } from '../../models';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
  public get securityUser(): SecurityUser {
    return this.userSecurityService.getCurrentUser();
  }

  public constructor(
    private userSecurityService: UserSecurityService) { }

  public logInClicked(): void {
    this.userSecurityService.logIn();
  }

  public logOutClicked(): void {
    this.userSecurityService.logOut();
  }
}
