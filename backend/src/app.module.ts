import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AndressModule } from './modules/andress/andress.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AndressModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
