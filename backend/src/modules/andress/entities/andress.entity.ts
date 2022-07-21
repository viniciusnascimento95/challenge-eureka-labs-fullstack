import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Andress')
export class Andress {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  cep: string;

  @Column()
  street: string; // logradouro

  @Column()
  district: string; // Bairro

  @Column()
  city: string; // Localidade

  @Column()
  uf: string;

  @CreateDateColumn()
  created_at: Date;
}
