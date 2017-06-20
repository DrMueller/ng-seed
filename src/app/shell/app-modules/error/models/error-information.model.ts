export class ErrorInformation {
  public static createEmpty(): ErrorInformation {
    return new ErrorInformation('', '');
  }

  constructor(
    public errorName: string,
    public errorMessage: string
  ) { }
}
