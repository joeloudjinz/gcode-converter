export class Laser {
  public commandPowerOn: string;
  public commandPowerOff: string;
  constructor(commandPowerOn: string, commandPowerOff: string) {
    this.commandPowerOn = commandPowerOn;
    this.commandPowerOff = commandPowerOff;
  }
}
