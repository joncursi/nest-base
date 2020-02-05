/**
 * @prettier
 */

import { Module } from '@nestjs/common';

import AppController from './app.controller';
import AppService from './app.service';
import CatsController from './Cats/cats.controller';
import CatsService from './Cats/cats.service';
import DogsController from './Dogs/dogs.controller';
import DogsService from './Dogs/dogs.service';

@Module({
  controllers: [AppController, CatsController, DogsController],
  imports: [],
  providers: [AppService, CatsService, DogsService],
})
class AppModule {}

export default AppModule;
