export class Individual {
  public static createSome(): Individual[] {
    const result = [
      new Individual('b321', 'Matthias', 'Müller'),
      new Individual('a123', 'Patrick', 'Stewart'),
      new Individual('c567', 'Stefanie', 'Heinzmann')
    ];

    return result;
  }

  constructor(public id: string, public firstName: string, public lastName: string) {
  }


}
