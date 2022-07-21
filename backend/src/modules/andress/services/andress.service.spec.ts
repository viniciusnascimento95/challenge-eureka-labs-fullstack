import { Test, TestingModule } from '@nestjs/testing';
import { AndressService } from './andress.service';

describe('AndressService', () => {
  let service: AndressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AndressService],
    }).compile();

    service = module.get<AndressService>(AndressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
