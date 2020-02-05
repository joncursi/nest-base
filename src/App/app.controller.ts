/**
 * @prettier
 */

import { Controller, Get } from '@nestjs/common';

import AppService from './app.service';
import { GetCatDto } from './dto';

@Controller('')
class AppController {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly appService: AppService) {}

  @Get('')
  getCat(): GetCatDto {
    return this.appService.getCat();
  }
}

export default AppController;
