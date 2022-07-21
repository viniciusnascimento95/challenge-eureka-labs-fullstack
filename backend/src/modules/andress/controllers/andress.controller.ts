import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateAndressDto } from '../dto/create-andress.dto';
import { Andress } from '../entities/andress.entity';

import { AndressService } from '../services/andress.service';

@Controller('andress')
export class AndressController {
  constructor(private readonly andressService: AndressService) {}

  @Post()
  async create(@Body() data: CreateAndressDto): Promise<Andress> {
    const andressCreated = await this.andressService.create(data);
    return andressCreated;
  }

  @Get()
  findAll() {
    return this.andressService.findAll();
  }
}
