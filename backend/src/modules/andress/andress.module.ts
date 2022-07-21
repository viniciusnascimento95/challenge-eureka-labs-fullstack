import { Module } from '@nestjs/common';
import { AndressService } from './andress.service';
import { AndressController } from './andress.controller';

@Module({
  controllers: [AndressController],
  providers: [AndressService]
})
export class AndressModule {}
