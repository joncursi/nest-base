/**
 * @prettier
 */

import { Controller, Get, Param } from '@nestjs/common';

import { DogDto } from './dto';
import DogsService from './dogs.service';

@Controller('dogs')
class DogsController {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly dogsService: DogsService) {}

  @Get('')
  getDogs(): DogDto[] {
    return this.dogsService.getDogs();
  }

  @Get(':id')
  getDog(@Param('id') id): DogDto {
    return this.dogsService.getDog(id);
  }
}

export default DogsController;
