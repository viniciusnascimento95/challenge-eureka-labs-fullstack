import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AndressService } from './andress.service';
import { CreateAndressDto } from './dto/create-andress.dto';
import { UpdateAndressDto } from './dto/update-andress.dto';

@Controller('andress')
export class AndressController {
  constructor(private readonly andressService: AndressService) {}

  @Post()
  create(@Body() createAndressDto: CreateAndressDto) {
    return this.andressService.create(createAndressDto);
  }

  @Get()
  findAll() {
    return this.andressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.andressService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAndressDto: UpdateAndressDto) {
    return this.andressService.update(+id, updateAndressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.andressService.remove(+id);
  }
}
