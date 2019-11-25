import { Laser } from './laser.dto';
import { FeedRate } from './feed-rate.dto';
import { Invest } from './invest.dto';
import {
  IsDefined,
  IsOptional,
  NotEquals,
  IsNumber,
  Min,
  Max,
  IsBoolean,
} from 'class-validator';

export class Parameters {
  @IsDefined()
  @IsNumber()
  @NotEquals(0)
  public toolDiameter: number = 1;
  @IsDefined()
  @IsNumber(
    {
      maxDecimalPlaces: 2,
    },
    {
      message: 'Sensitivity should be a number of two decimal point',
    },
  )
  @Min(0.1)
  @Max(1)
  public sensitivity: number = 0.95;
  @IsDefined()
  @IsNumber()
  @Min(100)
  @Max(1000)
  public scaleAxes: number = 200;
  @IsDefined()
  @IsNumber()
  public deepStep: number = -1;
  @IsOptional()
  public invest: Invest = new Invest();
  @IsDefined()
  @IsNumber()
  @Min(0)
  @Max(3)
  public whiteZ: number = 0;
  @IsDefined()
  @IsNumber()
  @Min(-3)
  @Max(0)
  public blackZ: number = -2;
  @IsDefined()
  @IsNumber()
  @Min(1)
  public safeZ: number = 2;
  @IsOptional()
  public feedRate: FeedRate = new FeedRate();
  @IsDefined()
  @IsBoolean()
  public laserMode: boolean;
  @IsOptional()
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
