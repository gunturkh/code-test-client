module.exports = {
  verbose: true,
  preset: 'jest-puppeteer',
  globalSetup: './setup.js',
  globalTeardown: './teardown.js',
  testEnvironment: './puppeteer_environment.js'
}
