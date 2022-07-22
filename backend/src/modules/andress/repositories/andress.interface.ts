import { CreateAndressDto } from '../dto/create-andress.dto';
import { Andress } from '../entities/andress.entity';

export interface IAndressRepository {
  listAndressAll(): Promise<Andress[]>;
  findByCep(cep: string): Promise<Andress>;
  createAndress(data: CreateAndressDto): Promise<Andress>;
}
