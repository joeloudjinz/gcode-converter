import { Laser } from './laser.dto';
import { FeedRate } from './feed-rate.dto';
import { Invest } from './invest.dto';
import { IsDefined, IsOptional } from 'class-validator';

export class Parameters {
  @IsDefined()
  public toolDiameter: number = 1;
  @IsDefined()
  public sensitivity: number = 0.95;
  @IsDefined()
  public scaleAxes: number = 200;
  @IsDefined()
  public deepStep: number = -1;
  @IsOptional()
  public invest: Invest = new Invest();
  @IsDefined()
  public whiteZ: number = 0;
  @IsDefined()
  public blackZ: number = -2;
  @IsDefined()
  public safeZ: number = 2;
  @IsOptional()
  public feedRate: FeedRate = new FeedRate();
  @IsDefined()
  public laserMode: boolean;
  @IsOptional()
  public laser: Laser = new Laser();
  @IsOptional()
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
