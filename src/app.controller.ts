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
import { Parameters } from './converter/Dto/parameters.dto';
import { ConversionParametersParser } from './converter/Pipes/parameters';
@Controller()
export class AppController {
  constructor(private readonly converterService: ConverterService) {}
  @Post('/convert')
  @UseInterceptors(FileInterceptor('image'))
  convert(
    @UploadedFile() image: any,
    @Body(
      new ValidationPipe({
        transformOptions: { enableImplicitConversion: true },
        validationError: { target: false },
      }),
      ConversionParametersParser,
    )
    parameters: Parameters,
  ) {
    return this.converterService.start(image, parameters);
  }
}
