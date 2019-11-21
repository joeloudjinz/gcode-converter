export class Size {
  public pixel: string;
  public millimeter: string;

  constructor(input: string) {
    this.extractValues(input);
  }

  extractValues(input: string) {
    const splatted = input.replace(/[()]/gi, '').split('to');
    this.pixel = splatted[0].trim();
    this.millimeter = splatted[1].trim();
  }
}
