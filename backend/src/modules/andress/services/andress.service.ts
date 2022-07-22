import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { lastValueFrom } from 'rxjs';
import { CreateAndressDto } from '../dto/create-andress.dto';
import { Andress } from '../entities/andress.entity';
import { AndressRepository } from '../infra/typeorm/repositories/andress.repository';
import { IAndressRepository } from '../repositories/andress.interface';

type RequestViaCep = {
  status: number;
  cep: string;
  street: string;
  district: string;
  city: string;
  uf: string;
};
@Injectable()
export class AndressService {
  constructor(
    @InjectRepository(AndressRepository)
    private readonly andressRepository: IAndressRepository,
    private httpService: HttpService,
  ) {}

  async getCep(cep: string): Promise<RequestViaCep> {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    const response = await lastValueFrom(this.httpService.get(url));

    const results: RequestViaCep = {
      status: response.status,
      cep: response.data.cep,
      street: response.data.logradouro,
      district: response.data.bairro,
      city: response.data.localidade,
      uf: response.data.uf,
    };

    return results;
  }

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

    const searchCep = await this.getCep(cep);

    const andress = await this.andressRepository.createAndress({
      cep: searchCep.cep,
      street: searchCep.street,
      district: searchCep.district,
      city: searchCep.city,
      uf: searchCep.uf,
    });

    console.log(andress);

    return andress;
  }

  async findAll(): Promise<Andress[]> {
    const andress = await this.andressRepository.listAndressAll();

    return andress;
  }
}
