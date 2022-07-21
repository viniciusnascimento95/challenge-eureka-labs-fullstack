import { Test, TestingModule } from '@nestjs/testing';
import { AndressController } from './andress.controller';
import { AndressService } from './andress.service';

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
