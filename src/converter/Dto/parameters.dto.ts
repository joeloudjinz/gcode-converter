import { Laser } from './laser.dto';
import { FeedRate } from './feed-rate.dto';
import { Invest } from './invest.dto';

export class Parameters {
  constructor(
    public toolDiameter: number = 1,
    public sensitivity: number = 0.95,
    public scaleAxes: number = 200,
    public deepStep: number = -1,
    public invest: Invest = new Invest(),
    public whiteZ: number = 0,
    public blackZ: number = -2,
    public safeZ: number = 2,
    public feedRate: FeedRate = new FeedRate(),
    public laser: Laser = new Laser(),
    public dirImg: string = null,
  ) {}
}
