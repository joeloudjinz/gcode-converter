import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ConverterService } from './converter/converter.service';
<<<<<<< HEAD
import { ParametersValidatorPipe } from './converter/Pipes/validator';
import { ParametersParser } from './converter/Pipes/parser';
=======
>>>>>>> 7af20ee2c1c5b9a41bce805d9fa7595a0b03edff
import { Parameters } from './converter/Dto/parameters.dto';
@Controller()
export class AppController {
  constructor(private readonly converterService: ConverterService) {}
  @Post('/convert')
  @UseInterceptors(FileInterceptor('image'))
  convert(
    @UploadedFile() image: any,
<<<<<<< HEAD
    @Body('parameters', ParametersParser, ParametersValidatorPipe)
    parameters: any,
  ) {
    return;
    // return this.converterService.start(image, parameters);
=======
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
    return this.converterService.start(image, parameters);
>>>>>>> 7af20ee2c1c5b9a41bce805d9fa7595a0b03edff
  }
}
