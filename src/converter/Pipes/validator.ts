import { Injectable, PipeTransform, ArgumentMetadata } from '@nestjs/common';
import { ParametersValidator } from '../validation.service';

@Injectable()
export class ParametersValidatorPipe implements PipeTransform {
  constructor(private readonly validator: ParametersValidator) {}
  transform(parameters: any, metadata: ArgumentMetadata) {
    const parsed = JSON.parse(parameters);
    this.validator.validate(parsed);
    return parsed;
  }
}
