import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { Parameters } from '../Dto/parameters.dto';
import { FeedRate } from '../Dto/feed-rate.dto';
import { Invest } from '../Dto/invest.dto';
import { Laser } from '../Dto/laser.dto';

@Injectable()
export class ConversionParametersParser implements PipeTransform {
  parseFeedRate(old: any): FeedRate {
    if (old.feedRate) {
      const feedRate = JSON.parse(old.feedRate);
      return new FeedRate(parseInt(feedRate.work), parseInt(feedRate.idle));
    }
    return new FeedRate();
  }
  transform(old: any, metadata: ArgumentMetadata) {
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
      new Laser(),
    );
  }
}
