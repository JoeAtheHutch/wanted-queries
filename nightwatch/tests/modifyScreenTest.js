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
    'A quick test of the Modify page': browser => {
        browser.click(selectors.topNav.modifyPage)
        for (var key in data.modifyData.allTest) {
            if (data.goodData.allTest.hasOwnProperty(key)) {
                browser.click(selectors.modifyFields.clear)
                functions.enterValue(selectors.modifyFields.warrantID, data.modifyData.warrantID.id, browser)
                functions.enterValue(selectors.modifyFields[key], data.goodData.allTest[key], browser)
                browser.click(selectors.modifyFields.submit)
                    .expect.element(selectors.modifyFields.query).text.to.contain(data.modifyData.queryStrings[key])
            }
        }
    },
    'Drivers permits and licenses need to be done as a group': browser => {
        browser.click(selectors.topNav.modifyPage);
        browser.click(selectors.modifyFields.clear)
        functions.enterValue(selectors.modifyFields.warrantID, data.modifyData.warrantID.id, browser);
        functions.enterValue(selectors.modifyFields.dl, data.modifyData.dlTest.dl, browser);
        functions.enterValue(selectors.modifyFields.dlExpiration, data.modifyData.dlTest.dlExpiration, browser);
        functions.enterValue(selectors.modifyFields.dlState, data.modifyData.dlTest.dlState, browser);
        browser.click(selectors.modifyFields.submit)
            .expect.element(selectors.modifyFields.query).text.to.contain(data.modifyData.queryStrings.dl)

        browser.click(selectors.modifyFields.clear);
        functions.enterValue(selectors.modifyFields.warrantID, data.modifyData.warrantID.id, browser);
        functions.enterValue(selectors.modifyFields.lp, data.modifyData.dlTest.lp, browser);
        functions.enterValue(selectors.modifyFields.lpExpiration, data.modifyData.dlTest.lpExpiration, browser);
        functions.enterValue(selectors.modifyFields.lpState, data.modifyData.dlTest.lpState, browser);
        browser.click(selectors.modifyFields.submit)
            .expect.element(selectors.modifyFields.query).text.to.contain(data.modifyData.queryStrings.lp)

    }
}