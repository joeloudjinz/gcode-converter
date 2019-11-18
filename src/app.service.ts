import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  startConversionProcess(image) {
    return image;
  }
}
