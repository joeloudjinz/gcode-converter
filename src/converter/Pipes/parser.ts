import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Parameters } from '../Dto/parameters.dto';

@Injectable()
export class ParametersParser implements PipeTransform {
  transform(payload: string, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return payload;
    }
    const object = plainToClass(Parameters, JSON.parse(payload));
    console.log('in parser', object);
    return object;
  }
  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
