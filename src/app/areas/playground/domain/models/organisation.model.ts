import { ConstructableProperty, ConstructableArrayProperty } from 'app/infrastructure/decorators';

import { Individual } from '.';

export class Organisation {
  public name: string | undefined = undefined;
  public coName: string | undefined = undefined;

  @ConstructableProperty(Individual)
  public individual: Individual | undefined = undefined;

  @ConstructableProperty(Individual)
  public individuals: Individual[] | undefined = undefined;
}
