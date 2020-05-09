module.exports = {
  transform: { '^.+\\.[jt]sx?$': '<rootDir>/jest/jest-preprocess.js' },
  moduleNameMapper: { '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/file-mock.js' },
  testPathIgnorePatterns: ['node_modules', '.cache', 'public'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: { __PATH_PREFIX__: '' },
  setupFiles: ['<rootDir>/jest/loadershim.js'],
  testRegex: '/src/.+\\.test\\.[jt]sx?$',
  collectCoverageFrom: [
    'src/logic/**/*.[jt]s',
    'src/utilities/**/*.[jt]s'
  ],
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'html'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  }
}
