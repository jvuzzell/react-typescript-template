module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\.(scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\.tsx?$': 'ts-jest',
  },
  testRegex: '(/tests/.*|(\.|/)(test|spec))\.tsx?$',
    testPathIgnorePatterns: ['/node_modules/', '/.storybook/'],
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json',
      },
    },
  };
