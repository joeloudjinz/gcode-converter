import { Laser } from './laser.dto';
import { FeedRate } from './feed-rate.dto';
import { Invest } from './invest.dto';
import {
  IsDefined,
  IsOptional,
  IsBoolean,
  IsNumber,
  Max,
  Min,
  ValidateNested,
  IsInstance,
} from 'class-validator';

export class Parameters {
  @IsDefined()
  @IsNumber()
  public toolDiameter: number = 1;

  @IsDefined()
  @IsNumber({
    maxDecimalPlaces: 2,
  })
  public sensitivity: number = 0.95;

  @IsDefined()
  @IsNumber()
  @Max(1000)
  @Min(100)
  public scaleAxes: number = 200;

  @IsDefined()
  @IsNumber()
  public deepStep: number = -1;

  @IsOptional()
  @ValidateNested()
  public invest: Invest = new Invest();

  @IsDefined()
  @IsNumber()
  public whiteZ: number = 0;

  @IsDefined()
  @IsNumber()
  public blackZ: number = -2;

  @IsDefined()
  @IsNumber()
  public safeZ: number = 2;

  @IsOptional()
  @ValidateNested()
  public feedRate: FeedRate = new FeedRate();

  @IsDefined()
  @IsBoolean()
  public laserMode: boolean;

  @IsOptional()
  @ValidateNested()
  public laser: Laser = new Laser();

  public dirImg: string = '';

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
  }
}
