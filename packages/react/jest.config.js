module.exports = {
  rootDir: './',
  clearMocks: true,
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest'
  },
  setupFilesAfterEnv: ['../../setupEnzyme.ts'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  }
}
