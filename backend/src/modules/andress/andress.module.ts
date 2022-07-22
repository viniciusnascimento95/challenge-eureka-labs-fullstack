import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AndressController } from './controllers/andress.controller';
import { AndressRepository } from './infra/typeorm/repositories/andress.repository';
import { AndressService } from './services/andress.service';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([AndressRepository])],
  providers: [AndressService],
  controllers: [AndressController],
})
export class AndressModule {}
