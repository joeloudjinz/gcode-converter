import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
  ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ConverterService } from './converter/converter.service';
@Controller()
export class AppController {
  constructor(private readonly converterService: ConverterService) {}
  @Post('/convert')
  @UseInterceptors(FileInterceptor('image'))
  convert(
    @UploadedFile() image: any,
    @Body('parameters')
    parameters: string,
  ) {
    return this.converterService.start(image, JSON.parse(parameters));
  }
}
