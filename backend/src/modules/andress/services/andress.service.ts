import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAndressDto } from '../dto/create-andress.dto';
import { Andress } from '../entities/andress.entity';
import { AndressRepository } from '../infra/typeorm/repositories/andress.repository';
import { IAndressRepository } from '../repositories/andress.interface';

@Injectable()
export class AndressService {
  constructor(
    @InjectRepository(AndressRepository)
    private readonly andressRepository: IAndressRepository,
  ) {}

  async create({
    cep,
    street,
    district,
    city,
    uf,
  }: CreateAndressDto): Promise<Andress> {
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
    //implementation search cep
    const andress = await this.andressRepository.createAndress({
      cep,
      street,
      district,
      city,
      uf,
    });

    return andress;
  }

  async findAll(): Promise<Andress[]> {
    const andress = await this.andressRepository.listAndressAll();

    return andress;
  }
}
