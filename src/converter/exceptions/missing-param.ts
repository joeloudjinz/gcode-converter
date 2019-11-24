import { HttpException, HttpStatus } from '@nestjs/common';

export class MissingParameterException extends HttpException {
  constructor(name: string) {
    super(`${name} not specified`, HttpStatus.BAD_REQUEST);
  }
}
