import { Injectable } from '@nestjs/common';
import { CreateAndressDto } from './dto/create-andress.dto';
import { UpdateAndressDto } from './dto/update-andress.dto';

@Injectable()
export class AndressService {
  create(createAndressDto: CreateAndressDto) {
    return 'This action adds a new andress';
  }

  findAll() {
    return `This action returns all andress`;
  }

  findOne(id: number) {
    return `This action returns a #${id} andress`;
  }

  update(id: number, updateAndressDto: UpdateAndressDto) {
    return `This action updates a #${id} andress`;
  }

  remove(id: number) {
    return `This action removes a #${id} andress`;
  }
}
