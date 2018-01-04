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
    'Tests for acceptable minimum and maximum characters in field': browser=> {
        browser.click(selectors.topNav.cancelPage)
        for(var key in data.validCancel) {
            if(data.validCancel.hasOwnProperty(key)) {
                functions.cancelForm(data.validCancel[key], browser)
                browser.click(selectors.cancelFields.submit)
                    .expect.element(selectors.cancelFields.query).text.to.contain(data.cancelQueries[key])
                browser.click(selectors.cancelFields.clear)
            }
        }
    },
    'Test for characters that exceed the min max characters for the Reason of Cancellation': browser => {
        browser.click(selectors.cancelFields.clear)
        for(var key in data.invalidCancel) {
            if(data.invalidCancel.hasOwnProperty(key)) {
                functions.cancelForm(data.invalidCancel[key], browser)
                browser.click(selectors.cancelFields.submit)
                    .expect.element(selectors.cancelFields.errorText).text.to.contain(data.cancelErrors.reason)
                browser.click(selectors.cancelFields.clear)
            }
        }
    }
}
