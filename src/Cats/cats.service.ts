/**
 * @prettier
 */

import { constant } from 'lodash';
import { Injectable } from '@nestjs/common';

import { CatDto } from './dto';

@Injectable()
class CatsService {
  getCats: () => CatDto[] = constant([
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

  getCat(id: string): CatDto {
    return {
      age: 1,
      breed: 'Bombay',
      name: `Cat ${id}`,
    };
  }
}

export default CatsService;
