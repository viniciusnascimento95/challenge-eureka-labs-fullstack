import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAndressDto } from '../dto/create-andress.dto';
import { Andress } from '../entities/andress.entity';
import { AndressRepository } from '../infra/typeorm/repositories/andress.repository';
import { IAndressRepository } from '../repositories/andress.interface';
import { getCep } from './api/viacep';

@Injectable()
export class AndressService {
  constructor(
    @InjectRepository(AndressRepository)
    private readonly andressRepository: IAndressRepository,
  ) {}

  async create({ cep }: CreateAndressDto): Promise<Andress> {
    const cepExists = await this.andressRepository.findByCep(cep);

    if (cepExists) {
      const andressExists = await this.andressRepository.createAndress({
        cep: cepExists.cep,
        street: cepExists.street,
        district: cepExists.district,
        city: cepExists.city,
        uf: cepExists.uf,
      });

      return andressExists;
    }

    const searchCep = await getCep(cep);

    const andress = await this.andressRepository.createAndress({
      cep: searchCep.cep,
      street: searchCep.street,
      district: searchCep.district,
      city: searchCep.city,
      uf: searchCep.uf,
    });

    return andress;
  }

  async findAll(): Promise<Andress[]> {
    const andress = await this.andressRepository.listAndressAll();

    return andress;
  }
}
