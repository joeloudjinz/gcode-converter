import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidNumberException extends HttpException {
  constructor(name: string) {
    super(
      `${name} is missing or is not a valid number value`,
      HttpStatus.BAD_REQUEST,
    );
  }
}
