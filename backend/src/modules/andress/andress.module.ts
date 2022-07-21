import { Module } from '@nestjs/common';
import { AndressController } from './controllers/andress.controller';
import { AndressService } from './services/andress.service';

@Module({
  controllers: [AndressController],
  providers: [AndressService],
})
export class AndressModule {}
