import { Injectable } from '@nestjs/common';
import { InvalidNumberException } from './exceptions/invalid-number';
import { OutOfRangException } from './exceptions/out-of-rang-number';
import { MissingParameterException } from './exceptions/missing-param';
import { Validator } from 'class-validator';

@Injectable()
export class ParametersValidator {
  private readonly min: number = 100;
  private readonly max: number = 1000;
  constructor(private readonly validator: Validator) {}
  public validate(parameters: any) {
    this.validateNumberParameter(parameters.toolDiameter, 'Tool Diameter');
    this.validateNumberParameter(parameters.sensitivity, 'Sensitivity');
    this.validateNumberParameter(parameters.deepStep, 'Deep Step');
    this.validateNumberParameter(parameters.whiteZ, 'White Z');
    this.validateNumberParameter(parameters.blackZ, 'Black Z');
    this.validateNumberParameter(parameters.safeZ, 'Safe Z');
    this.validateScaleAxesParameter(parameters.scaleAxes);
    this.validateFeedRateParameters(parameters.feedRate);
    this.validateLaserParameters(parameters.laserMode, parameters.laser);
  }

  private validateNumberParameter(value: any, name: string) {
    if (!this.isValidNumber(value)) {
      throw new InvalidNumberException(name);
    }
  }

  private validateScaleAxesParameter(scaleAxes: number) {
    this.validateNumberParameter(scaleAxes, 'Scale Axes');
    if (!this.isNumberBetween(scaleAxes, this.min, this.max)) {
      throw new OutOfRangException('Scale Axes', this.min, this.max);
    }
  }

  private validateFeedRateParameters(feedRate: any) {
    if (!this.validator.isDefined(feedRate)) {
      return;
    }
    if (!this.isValidNumber(feedRate.work)) {
      throw new InvalidNumberException('Work of Feed Rate');
    }
    if (!this.isValidNumber(feedRate.idle)) {
      throw new InvalidNumberException('Idle of Feed Rate');
    }
  }

  private validateLaserParameters(laserMode: boolean, laser: any) {
    if (!this.isValidBoolean(laserMode)) {
      throw new MissingParameterException('Laser Mode');
    }
    if (laserMode === false) {
      return;
    }
    if (!this.validator.isDefined(laser)) {
      throw new MissingParameterException(
        'Laser parameters (Command Power On & Off)',
      );
    }
  }

  public isValidNumber(value: number): boolean {
    return this.validator.isDefined(value) && this.validator.isNumber(value);
  }

  public isValidString(value: string): boolean {
    return (
      this.validator.isDefined(value) &&
      this.validator.isString(value) &&
      this.validator.isNotEmpty(value)
    );
  }

  public isValidBoolean(value: boolean | string): boolean {
    return (
      this.validator.isDefined(value) &&
      (this.validator.isBoolean(value) || this.validator.isBooleanString(value))
    );
  }

  public isNumberBetween(value: number, min: number, max: number): boolean {
    return this.validator.min(value, min) && this.validator.max(value, max);
  }

  public isValidDecimal(value: number, decimal: number = 2): boolean {
    return (
      this.validator.isDefined(value) &&
      this.validator.isNumber(value, {
        maxDecimalPlaces: decimal,
      })
    );
  }
}
