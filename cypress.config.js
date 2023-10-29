const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = {
  retries:1,
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
            return config;
    },
    
  },
};
