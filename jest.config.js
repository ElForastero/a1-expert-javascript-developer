module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '\\.(ts|tsx)?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.css$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
  ], // setupFiles before the tests are ran
};
