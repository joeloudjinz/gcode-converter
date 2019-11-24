export class FeedRate {
  public work: number;
  public idle: number;
  constructor(work: number = 3000, idle: number = 1200) {
    this.work = work;
    this.idle = idle;
  }
}
