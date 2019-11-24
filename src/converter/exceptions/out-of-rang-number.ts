import { HttpException, HttpStatus } from '@nestjs/common';

export class OutOfRangException extends HttpException {
  constructor(name: string, min: number, max: number) {
    super(
      `${name} should be a number between ${min} & ${max}`,
      HttpStatus.BAD_REQUEST,
    );
  }
}
