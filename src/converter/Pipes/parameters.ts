import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
  HttpStatus,
} from '@nestjs/common';
import { Parameters } from '../Dto/parameters.dto';
import { FeedRate } from '../Dto/feed-rate.dto';
import { Invest } from '../Dto/invest.dto';
import { Laser } from '../Dto/laser.dto';
import { Validator } from 'class-validator';

@Injectable()
export class ConversionParametersParser implements PipeTransform {
  /**
   * Parses the feed rate object in the parameters.
   * @param old parameters
   */
  private parseFeedRate(old: any): FeedRate {
    if (old.feedRate) {
      const feedRate = JSON.parse(old.feedRate);
      return new FeedRate(parseInt(feedRate.work), parseInt(feedRate.idle));
    }
    return new FeedRate();
  }

  /**
   * Determine if the conversion should use laser mode
   * @param old parameters
   */
  private shouldUseLaser(old: any): Laser {
    if (!old.laserMode || old.laserMode == 'false') {
      return null;
    }
    const laser = JSON.parse(old.laser);
    if (!laser.commandPowerOn || !laser.commandPowerOff) {
      throw new BadRequestException({
        status: HttpStatus.BAD_REQUEST,
        error:
          'Laser mode configuration is not correct, provide both power strings',
      });
    }
    return new Laser(old.commandPowerOn, old.commandPowerOff);
  }

  public transform(old: any, metadata: ArgumentMetadata) {
    return new Parameters(
      parseInt(old.toolDiameter),
      parseInt(old.sensitivity),
      parseInt(old.scaleAxes),
      parseInt(old.deepStep),
      new Invest(),
      parseInt(old.whiteZ),
      parseInt(old.blackZ),
      parseInt(old.safeZ),
      this.parseFeedRate(old),
      old.laserMode,
      this.shouldUseLaser(old),
    );
  }
}
