/**
 * @prettier
 */

import { constant } from 'lodash';
import { Injectable } from '@nestjs/common';

@Injectable()
class AppService {
  getHello = constant('Hello World!');
}

export default AppService;
