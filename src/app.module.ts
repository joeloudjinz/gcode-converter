import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MulterModule } from '@nestjs/platform-express';
import { multerConfiguration } from './utils/multer.configuration';

@Module({
  imports: [MulterModule.register(multerConfiguration)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
