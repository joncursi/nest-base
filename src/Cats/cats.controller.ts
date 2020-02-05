/**
 * @prettier
 */

import { Controller, Get, Param } from '@nestjs/common';

import { CatDto } from './dto';
import CatsService from './cats.service';

@Controller('cats')
class CatsController {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly catsService: CatsService) {}

  @Get('')
  getCats(): CatDto[] {
    return this.catsService.getCats();
  }

  @Get(':id')
  getCat(@Param('id') id): CatDto {
    return this.catsService.getCat(id);
  }
}

export default CatsController;
