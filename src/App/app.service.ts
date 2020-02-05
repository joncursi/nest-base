/**
 * @prettier
 */

import { constant } from 'lodash';
import { Injectable } from '@nestjs/common';

@Injectable()
class AppService {
  getCat = constant({
    age: 1,
    breed: 'Bombay',
    name: 'Marvin',
  });
}

export default AppService;
