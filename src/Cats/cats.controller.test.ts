/**
 * @prettier
 */

import { Test, TestingModule } from '@nestjs/testing';

import CatsController from './cats.controller';
import CatsService from './cats.service';

describe('CatsController', () => {
  let catsController: CatsController;

  beforeEach(async () => {
    const cats: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();

    catsController = cats.get<CatsController>(CatsController);
  });

  describe('root', () => {
    it('should return a list of cats', () => {
      expect(catsController.getCats()).toEqual([
        {
          age: 2,
          breed: 'American Shorthair',
          name: 'Millie',
        },
        {
          age: 1,
          breed: 'Bombay',
          name: 'Marvin',
        },
      ]);
    });

    it('should return a specific cat', () => {
      expect(catsController.getCat('1')).toEqual({
        age: 1,
        breed: 'Bombay',
        name: 'Cat 1',
      });
    });
  });
});
