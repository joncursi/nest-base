/**
 * @prettier
 */

import { Test, TestingModule } from '@nestjs/testing';

import DogsController from './dogs.controller';
import DogsService from './dogs.service';

describe('DogsController', () => {
  let dogsController: DogsController;

  beforeEach(async () => {
    const dogs: TestingModule = await Test.createTestingModule({
      controllers: [DogsController],
      providers: [DogsService],
    }).compile();

    dogsController = dogs.get<DogsController>(DogsController);
  });

  describe('root', () => {
    it('should return a list of dogs', () => {
      expect(dogsController.getDogs()).toEqual([
        {
          age: 14,
          breed: 'Yorkshire Terrier',
          name: 'Winston',
        },
        {
          age: 10,
          breed: 'Golden Retriever',
          name: 'Sandy',
        },
      ]);
    });

    it('should return a specific dog', () => {
      expect(dogsController.getDog('1')).toEqual({
        age: 14,
        breed: 'Yorkshire Terrier',
        name: 'Dog 1',
      });
    });
  });
});
