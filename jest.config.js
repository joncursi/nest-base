/**
 * @prettier
 */

/* eslint-disable immutable/no-mutation */

module.exports = {
  coverageDirectory: '../coverage',
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testEnvironment: 'node',
  testRegex: '.test.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
};
