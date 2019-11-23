import { IsDefined, IsString } from 'class-validator';

export class Laser {
  @IsDefined()
  @IsString()
  public commandPowerOn: string;
  @IsDefined()
  @IsString()
  public commandPowerOff: string;
  constructor(commandPowerOn: string = 'M04', commandPowerOff: string = 'M05') {
    this.commandPowerOn = commandPowerOn;
    this.commandPowerOff = commandPowerOff;
  }
}
