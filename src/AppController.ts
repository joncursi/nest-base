/**
 * @prettier
 */

import { Controller, Get } from '@nestjs/common';

import AppService from './AppService';

@Controller()
class AppController {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

export default AppController;
