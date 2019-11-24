import { Laser } from './laser.dto';
import { FeedRate } from './feed-rate.dto';
import { Invest } from './invest.dto';

export class Parameters {
  public toolDiameter: number = 1;
  public sensitivity: number = 0.95;
  public scaleAxes: number = 200;
  public deepStep: number = -1;
  public invest: Invest = new Invest();
  public whiteZ: number = 0;
  public blackZ: number = -2;
  public safeZ: number = 2;
  public feedRate: FeedRate = new FeedRate();
  public laserMode: boolean;
  public laser: Laser = new Laser();
  public dirImg: string;

  constructor(
    toolDiameter: number,
    sensitivity: number,
    scaleAxes: number,
    deepStep: number,
    invest: Invest,
    whiteZ: number,
    blackZ: number,
    safeZ: number,
    feedRate: FeedRate,
    laserMode: boolean,
    laser: Laser,
    dirImg: string = '',
  ) {
    this.toolDiameter = toolDiameter;
    this.sensitivity = sensitivity;
    this.scaleAxes = scaleAxes;
    this.deepStep = deepStep;
    this.invest = invest;
    this.whiteZ = whiteZ;
    this.blackZ = blackZ;
    this.safeZ = safeZ;
    this.feedRate = feedRate;
    this.laserMode = laserMode;
    this.laser = laser;
    this.dirImg = dirImg;
  }
}
