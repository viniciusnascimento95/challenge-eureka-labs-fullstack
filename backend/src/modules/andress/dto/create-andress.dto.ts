import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateAndressDto {
  @ApiProperty()
  @IsString()
  cep: string;

  @ApiProperty()
  @IsString()
  street: string;

  @ApiProperty()
  @IsString()
  district: string;

  @ApiProperty()
  @IsString()
  city: string;

  @ApiProperty()
  @IsString()
  uf: string;
}
