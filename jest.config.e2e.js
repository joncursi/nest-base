/**
 * @prettier
 */

/* eslint-disable immutable/no-mutation */

module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: './test',
  testEnvironment: 'node',
  testRegex: '.test.e2e.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
};
