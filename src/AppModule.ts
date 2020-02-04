/**
 * @prettier
 */

import { Module } from '@nestjs/common';

import AppController from './AppController';
import AppService from './AppService';

@Module({
  controllers: [AppController],
  imports: [],
  providers: [AppService],
})
class AppModule {}

export default AppModule;
