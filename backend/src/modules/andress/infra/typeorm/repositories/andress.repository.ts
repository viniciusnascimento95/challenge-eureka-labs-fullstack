import { CreateAndressDto } from 'src/modules/andress/dto/create-andress.dto';
import { Andress } from 'src/modules/andress/entities/andress.entity';
import { IAndressRepository } from 'src/modules/andress/repositories/andress.interface';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Andress)
class AndressRepository
  extends Repository<Andress>
  implements IAndressRepository
{
  async listAndressAll(): Promise<Andress[]> {
    const andress = await this.find();
    return andress;
  }

  async findByCep(cep: string): Promise<Andress> {
    const andress = await this.findOne({ cep });
    return andress;
  }

  async createAndress({
    cep,
    street,
    district,
    city,
    uf,
  }: CreateAndressDto): Promise<Andress> {
    const andressCreated = this.create({ cep, street, district, city, uf });

    await this.save(andressCreated);

    return andressCreated;
  }
}

export { AndressRepository };
