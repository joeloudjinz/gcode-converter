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
  IsString,
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
  @IsDefined()
  @IsNumber()
  private workFeedRate: number = 3000;
  @IsOptional()
  @IsDefined()
  @IsNumber()
  private idleFeedRate: number = 1200;

  @IsDefined()
  @IsBoolean()
  public laserMode: boolean = false;

  @IsOptional()
  @IsString()
  private laserPowerOn: string = 'M04';
  @IsOptional()
  @IsString()
  private laserPowerOff: string = 'M05';

  public laser: Laser;
  public feedRate: FeedRate;
  public invest: Invest = new Invest();
  public dirImg: string;
  /**
   * Construct a parameter (conversion configuration) object for conversion process
   *
   * @param payload Parameters from the body of the request
   * @param path the path to the image after uploading it
   */
  public constructForConversion(payload: any, path: string) {
    this.toolDiameter = payload.toolDiameter;
    this.sensitivity = payload.sensitivity;
    this.scaleAxes = payload.scaleAxes;
    this.deepStep = payload.deepStep;
    this.whiteZ = payload.whiteZ;
    this.blackZ = payload.blackZ;
    this.safeZ = payload.safeZ;
    this.laserMode = payload.laserMode;
    this.setLaserConfiguration(payload.laserPowerOn, payload.laserPowerOff);
    this.setFeedRateConfiguration(payload.workFeedRate, payload.idleFeedRate);
    this.dirImg = path;
    return this;
  }

  private setLaserConfiguration(on: string, off: string) {
    if (this.laserMode === false) {
      this.laser = null;
    }

    if (on && off) {
      this.laser = new Laser(on, off);
    }

    this.laser = new Laser(this.laserPowerOn, this.laserPowerOff);
  }

  private setFeedRateConfiguration(work: number, idle: number) {
    if (work && idle) {
      this.feedRate = new FeedRate(work, idle);
    }

    this.feedRate = new FeedRate(this.workFeedRate, this.idleFeedRate);
  }
}
