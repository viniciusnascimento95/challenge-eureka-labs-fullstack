import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AndressModule } from './modules/andress/andress.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AndressModule],
})
export class AppModule {}
