import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ConverterService } from './converter/converter.service';
@Controller()
export class AppController {
  constructor(private readonly converterService: ConverterService) {}

  @Post('/convert')
  @UseInterceptors(FileInterceptor('image'))
  convert(@UploadedFile() image) {
    return this.converterService.start(image);
  }
}
