import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ConverterService } from './converter/converter.service';
import { ParametersValidatorPipe } from './converter/Pipes/validator';
import { ParametersParser } from './converter/Pipes/parser';
import { Parameters } from './converter/Dto/parameters.dto';
@Controller()
export class AppController {
  constructor(private readonly converterService: ConverterService) {}
  @Post('/convert')
  @UseInterceptors(FileInterceptor('image'))
  convert(
    @UploadedFile() image: any,
    @Body('parameters', ParametersParser, ParametersValidatorPipe)
    parameters: any,
  ) {
    console.log(parameters);
    return;
    // return this.converterService.start(image, parameters);
  }
}
