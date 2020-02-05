/**
 * @prettier
 */

import { Controller, Get } from '@nestjs/common';

import AppService from './app.service';

@Controller('')
class AppController {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly appService: AppService) {}

  @Get('')
  getHelloWorld(): string {
    return this.appService.getHelloWorld();
  }
}

export default AppController;
