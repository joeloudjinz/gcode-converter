export class Laser {
  public commandPowerOn: string;
  public commandPowerOff: string;
  constructor(commandPowerOn: string = 'M04', commandPowerOff: string = 'M05') {
    this.commandPowerOn = commandPowerOn;
    this.commandPowerOff = commandPowerOff;
  }
}
