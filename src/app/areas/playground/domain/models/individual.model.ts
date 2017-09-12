import { ConstructableProperty } from 'app/infrastructure/decorators';

import { Address } from '.';

export class Individual {
  public id: string | undefined = undefined;
  public firstName: string | undefined = undefined;
  public lastName: string | undefined = undefined;

  @ConstructableProperty(Address)
  public address: Address | undefined = undefined;

  @ConstructableProperty(Address)
  public address2: Address | undefined = undefined;

  public get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  public static createSome(): Individual[] {
    const result = [
      <Individual>{
        id: 'b321',
        firstName: 'Matthias',
        lastName: 'Müller'
      },
      <Individual>{
        id: 'a123',
        firstName: 'Patrick',
        lastName: 'Stewart'
      },
      <Individual>{
        id: 'c567',
        firstName: 'Stefanie',
        lastName: 'Heinzmann'
      }

    ];

    return result;
  }

}
