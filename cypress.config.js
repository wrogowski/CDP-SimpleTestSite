const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://simpletestsite.fabrykatestow.pl/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
