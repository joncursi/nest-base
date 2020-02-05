/**
 * @prettier
 */

import { constant } from 'lodash';
import { Injectable } from '@nestjs/common';

@Injectable()
class AppService {
  getHelloWorld = constant('Hello world!');
}

export default AppService;
