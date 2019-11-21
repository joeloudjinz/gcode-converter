export class Pixels {
  public processed: number;
  public unprocessed: number;

  constructor(pixel: number) {
    this.processed = 100 - pixel;
    this.unprocessed = pixel;
  }
}
