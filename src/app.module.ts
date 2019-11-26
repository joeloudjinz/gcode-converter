import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MulterModule } from '@nestjs/platform-express';
import { multerConfiguration } from './utils/multer.configuration';
import { ConverterService } from './converter/converter.service';

@Module({
  imports: [MulterModule.register(multerConfiguration)],
  controllers: [AppController],
  providers: [AppService, ConverterService],
})
export class AppModule {}
