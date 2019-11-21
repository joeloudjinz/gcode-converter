import { Injectable } from '@nestjs/common';
import { Parameters } from './Dto/parameters.dto';
import img2gcode = require('img2gcode');

@Injectable()
export class ConverterService {
  async start(image: any, parameters: Parameters) {
    parameters.dirImg = image.path;
    const result = await img2gcode
      .start(parameters)
      .on('complete', data => data);
    return result;
  }
}
