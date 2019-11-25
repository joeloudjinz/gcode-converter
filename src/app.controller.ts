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
@Controller()
export class AppController {
  constructor(private readonly converterService: ConverterService) {}
  @Post('/convert')
  @UseInterceptors(FileInterceptor('image'))
  convert(
    @UploadedFile() image: any,
    @Body(
      new ValidationPipe({
        validationError: {
          target: false,
        },
        transform: true,
        transformOptions: { enableImplicitConversion: true },
      }),
    )
    parameters: Parameters,
  ) {
    console.log(typeof parameters);
    console.log(parameters);
    return;
    // return this.converterService.start(image, JSON.parse(parameters));
  }
}
