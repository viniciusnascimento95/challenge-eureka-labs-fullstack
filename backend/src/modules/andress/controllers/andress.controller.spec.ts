import { Test, TestingModule } from '@nestjs/testing';
import { AndressService } from '../services/andress.service';
import { AndressController } from './andress.controller';

describe('AndressController', () => {
  let controller: AndressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AndressController],
      providers: [AndressService],
    }).compile();

    controller = module.get<AndressController>(AndressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
