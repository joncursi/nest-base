/**
 * @prettier
 */

import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';

import AppModule from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    await app.init();
  });

  // eslint-disable-next-line jest/expect-expect
  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello world!');
  });
});
