const selectors = require('../test_data/css_selectors');
const data = require('../test_data/test_data');
const functions = require('../test_data/test_functions')

module.exports = {
    before: browser => {
        browser.url('http://localhost:3000');
    },
    after: browser => {
        browser.end();
    },
    'Try some basic data entry stuff': browser => {
        browser.click(selectors.topNav.enterPage)
        for( var key in data.goodData) {
            if(data.goodData.hasOwnProperty(key)) {
                functions.fillForm(data.goodData[key], browser);
            }
            browser.click(selectors.entryFields.submit)
                .expect.element(selectors.entryFields.query).text.to.contain(data.expectedString[key])
            browser.click(selectors.entryFields.clear)
        }
    }
}