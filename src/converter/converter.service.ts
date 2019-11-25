import { Injectable } from '@nestjs/common';
import { Parameters } from './Dto/parameters.dto';
import img2gcode = require('img2gcode');
import { ConversionResult } from './Dto/result.dto';
import { Pixels } from './Dto/pixels.dto';
import { Size } from './Dto/size.dto';
import { Invest } from './Dto/invest.dto';
import { FeedRate } from './Dto/feed-rate.dto';
import { Laser } from './Dto/laser.dto';
import { ParametersValidator } from './validation.service';

@Injectable()
export class ConverterService {
  constructor(private readonly validator: ParametersValidator) {}
  /**
   * Starts the conversion process.
   *
   * @param image object
   * @param parameters
   */
  async start(image: any, parameters: Parameters) {
    const configuration = this.prepareConfiguration(parameters, image.path);
    const results = await img2gcode.start({ ...configuration });
    return this.prepareResult(results, configuration, Date.now());
  }

  private prepareConfiguration(parameters: any, path: string) {
    return new Parameters(
      parameters.toolDiameter,
      parameters.sensitivity,
      parameters.scaleAxes,
      parameters.deepStep,
      this.parseInvest(parameters.invest),
      parameters.whiteZ,
      parameters.blackZ,
      parameters.safeZ,
      this.parseFeedRate(parameters.feedRate),
      parameters.laserMode,
      this.parseLaser(parameters),
      path,
    );
  }

  private parseInvest(invest: any): Invest {
    if (invest) {
      return new Invest(invest.x, invest.y);
    }
    return new Invest();
  }

  private parseFeedRate(feedRate: any): FeedRate {
    if (feedRate) {
      return new FeedRate(feedRate.work, feedRate.idle);
    }
    return new FeedRate();
  }

  private parseLaser(parameters: any): Laser {
    if (parameters.laserMode) {
      return new Laser(
        parameters.laser.commandPowerOn,
        parameters.laser.commandPowerOff,
      );
    }
    return null;
  }

  /**
   * Construct a conversion result object.
   *
   * @param result conversion results
   * @param oldParams old parameters used during conversion
   * @param ended the time when conversion ended
   */
  private prepareResult(
    result: any,
    oldParams: Parameters,
    ended: number,
  ): ConversionResult {
    return new ConversionResult(
      result.dirgcode,
      oldParams,
      new Date(result.config.time),
      new Date(ended),
      new Pixels(result.config.errBlackPixel),
      new Size(result.config.imgSize),
    );
  }
}
