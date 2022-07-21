import { CreateAndressDto } from '../dto/create-andress.dto';
import { Andress } from '../entities/andress.entity';

export interface IAndressRepository {
  listAndressAll(): Promise<Andress[]>;
  createAndress(data: CreateAndressDto): Promise<Andress>;
}
