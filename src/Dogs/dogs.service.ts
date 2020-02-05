/**
 * @prettier
 */

import { constant } from 'lodash';
import { Injectable } from '@nestjs/common';

import { DogDto } from './dto';

@Injectable()
class DogsService {
  getDogs: () => DogDto[] = constant([
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

  getDog(id: string): DogDto {
    return {
      age: 14,
      breed: 'Yorkshire Terrier',
      name: `Dog ${id}`,
    };
  }
}

export default DogsService;
