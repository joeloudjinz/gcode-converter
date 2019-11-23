import { IsDefined, IsBoolean } from 'class-validator';

export class Invest {
  @IsDefined()
  @IsBoolean()
  public x: boolean;
  @IsDefined()
  @IsBoolean()
  public y: boolean;
  constructor(x: boolean = false, y: boolean = true) {
    this.x = x;
    this.y = y;
  }
}
