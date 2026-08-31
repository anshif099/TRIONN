const { defineConfig } = require('playwright/test');

module.exports = defineConfig({
  testDir: '.',
  timeout: 45000,
  workers: 1,
  reporter: 'line',
  use: {
    baseURL: 'http://127.0.0.1:9401',
    headless: true,
    launchOptions: {
      executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
    }
  }
});
