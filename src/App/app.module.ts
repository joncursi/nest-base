/**
 * @prettier
 */

import { Module } from '@nestjs/common';

import AppController from './app.controller';
import AppService from './app.service';

@Module({
  controllers: [AppController],
  imports: [],
  providers: [AppService],
})
class AppModule {}

export default AppModule;
