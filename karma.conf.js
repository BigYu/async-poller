process.env.CHROME_BIN = require('puppeteer').executablePath();

console.log(process.env.CHROME_BIN);

module.exports = function(config) {
  config.set({
    files: [
      './test/*.ts'
    ],
    browsers: ['ChromeHeadless'],
    frameworks: ['mocha'],
  });
};