import { Parameters } from './parameters.dto';
import { Size } from './size.dto';
import { Pixels } from './pixels.dto';

export class ConversionResult {
  constructor(
    public gcode: string,
    public configuration: Parameters,
    public time: Date,
    public pixels: Pixels,
    public size: Size,
  ) {}
}
