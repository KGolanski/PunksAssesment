const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://testnet.binancefuture.com',
    watchForFileChanges: false,
    chromeWebSecurity: false,

    setupNodeEvents(on, config) {
    //  require('cypress-mochawesome-reporter/plugin')(on);
    },       
  },
});
