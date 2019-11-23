import { IsDefined, IsNumber } from 'class-validator';

export class FeedRate {
  @IsDefined()
  @IsNumber()
  public work: number;
  @IsDefined()
  @IsNumber()
  public idle: number;
  constructor(work: number = 3000, idle: number = 1200) {
    this.work = work;
    this.idle = idle;
  }
}
