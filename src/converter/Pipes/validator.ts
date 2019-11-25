import { Injectable, PipeTransform, ArgumentMetadata } from '@nestjs/common';
import { ParametersValidator } from '../validation.service';
import { Parameters } from '../Dto/parameters.dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ParametersValidatorPipe implements PipeTransform {
  constructor(private readonly validator: ParametersValidator) {}
  transform(object: Parameters, metadata: ArgumentMetadata) {
    this.validator.validate(object);
    return object;
  }
}
