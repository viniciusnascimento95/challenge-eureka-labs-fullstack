import { PartialType } from '@nestjs/mapped-types';
import { CreateAndressDto } from './create-andress.dto';

export class UpdateAndressDto extends PartialType(CreateAndressDto) {}
