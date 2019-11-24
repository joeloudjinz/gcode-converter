import { Injectable } from '@nestjs/common';
import { Parameters } from './Dto/parameters.dto';
import img2gcode = require('img2gcode');
import { ConversionResult } from './Dto/result.dto';
import { Pixels } from './Dto/pixels.dto';
import { Size } from './Dto/size.dto';
import { Invest } from './Dto/invest.dto';
import { FeedRate } from './Dto/feed-rate.dto';
import { Laser } from './Dto/laser.dto';

@Injectable()
export class ConverterService {
  /**
   * Starts the conversion process.
   *
   * @param image object
   * @param parameters
   */
  async start(image: any, parameters: string) {
    const configuration = this.prepareConfiguration(
      JSON.parse(parameters),
      image.path,
    );
    const results = await img2gcode.start({ ...configuration });
    return this.prepareResult(results, configuration, Date.now());
  }

  private prepareConfiguration(parsed: any, path: string) {
    return new Parameters(
      parsed.toolDiameter,
      parsed.sensitivity,
      parsed.scaleAxes,
      parsed.deepStep,
      this.parseInvest(parsed.invest),
      parsed.whiteZ,
      parsed.blackZ,
      parsed.safeZ,
      this.parseFeedRate(parsed.feedRate),
      parsed.laserMode,
      this.parseLaser(parsed),
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

  private parseLaser(parsed: any): Laser {
    if (parsed.laserMode) {
      return new Laser(
        parsed.laser.commandPowerOn,
        parsed.laser.commandPowerOff,
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
