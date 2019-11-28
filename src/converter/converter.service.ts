import { Injectable } from '@nestjs/common';
import { Parameters } from './Dto/parameters.dto';
import img2gcode = require('img2gcode');
import { ConversionResult } from './Dto/result.dto';
import { Pixels } from './Dto/pixels.dto';
import { Size } from './Dto/size.dto';

@Injectable()
export class ConverterService {
  /**
   * Starts the conversion process.
   *
   * @param image object
   * @param parameters
   */
  async start(image: any, parameters: Parameters) {
<<<<<<< HEAD
    const configuration = this.prepareConfiguration(parameters, image.path);
=======
    const configuration = parameters.constructForConversion(
      parameters,
      image.path,
    );
    return configuration;
>>>>>>> 7af20ee2c1c5b9a41bce805d9fa7595a0b03edff
    const results = await img2gcode.start({ ...configuration });
    return this.prepareResult(results, configuration, Date.now());
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
