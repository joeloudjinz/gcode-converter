import { Parameters } from './parameters.dto';
import { Size } from './size.dto';
import { Pixels } from './pixels.dto';

export class ConversionResult {
  public duration: string = '';
  constructor(
    public gcode: string,
    public configuration: Parameters,
    public started: Date,
    public ended: Date,
    public pixels: Pixels,
    public size: Size,
  ) {
    this.calculateDuration();
  }

  calculateDuration() {
    const difference = new Date(this.ended.getTime() - this.started.getTime());
    if (difference.getMinutes() !== 0) {
      this.duration = `${difference.getMinutes()} m `;
    } else if (difference.getSeconds() !== 0) {
      this.duration += `${difference.getSeconds()} s `;
    } else if (difference.getMilliseconds() !== 0) {
      this.duration += `${difference.getMilliseconds()} ms`;
    }
  }
}
