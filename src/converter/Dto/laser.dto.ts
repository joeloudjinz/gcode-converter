export class Laser {
  constructor(
    public commandPowerOn: string = 'M04',
    public commandPowerOff: string = 'M05',
  ) {}
}
