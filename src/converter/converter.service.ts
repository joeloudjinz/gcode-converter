import { Injectable } from '@nestjs/common';

@Injectable()
export class ConverterService {
  start(Image) {
    return { message: 'Success', image: Image };
  }
}
