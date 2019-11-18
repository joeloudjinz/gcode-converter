import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/convert')
  @UseInterceptors(FileInterceptor('image'))
  convert(@UploadedFile() image) {
    return this.appService.startConversionProcess(image);
  }
}
