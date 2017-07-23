export class Individual {
  public id: string | undefined = undefined;
  public firstName: string | undefined = undefined;
  public lastName: string | undefined = undefined;

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
