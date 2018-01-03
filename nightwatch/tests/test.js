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
    'Testing valid data sets for new warrants': browser => {
        browser.click(selectors.topNav.enterPage)
        for (var key in data.goodData) {
            if (data.goodData.hasOwnProperty(key)) {
                functions.fillForm(data.goodData[key], browser);
                browser.click(selectors.entryFields.submit)
                browser.expect.element(selectors.entryFields.query).text.to.contain(data.expectedString[key])
                browser.expect.element(selectors.entryFields.valid).text.to.contain("Valid")
                browser.click(selectors.entryFields.clear)
            }
        }
    },
    'Testing for data with too few characters': browser => {
        browser.click(selectors.topNav.enterPage)
        for (var key in data.badData.shortVal) {
            if (data.badData.shortVal.hasOwnProperty(key)) {
                functions.fillForm(data.goodData.allTest, browser)
                functions.enterValue(selectors.entryFields[key], data.badData.shortVal[key], browser)
                browser.click(selectors.entryFields.submit)
                browser.expect.element(selectors.entryFields.errors).text.to.contain(data.expectedError.length[key])
            }
        }
    },
    'Testing for data with too many characters': browser => {
        browser.click(selectors.topNav.enterPage)
        functions.fillForm(data.goodData.allTest, browser)
        for (var key in data.badData.longVal) {
            if (data.badData.longVal.hasOwnProperty(key)) {
                functions.enterValue(selectors.entryFields[key], data.badData.longVal[key], browser)
            }
        }
        browser.click(selectors.entryFields.submit)
        for (var key in data.badData.longVal) {
            if (data.badData.longVal.hasOwnProperty(key)) {
                browser.expect.element(selectors.entryFields.errorList).text.to.contain(data.expectedError.length[key])
            }
        }
    },
    'Testing for different invalid characters': browser => {
        browser.click(selectors.topNav.enterPage)
        functions.fillForm(data.goodData.allTest, browser)
        for (var key in data.badData.invalidChar.alpha) {
            if (data.badData.invalidChar.alpha.hasOwnProperty(key)) {
                functions.enterValue(selectors.entryFields[key], data.badData.invalidChar.alpha[key], browser)
            }
        }
        browser.click(selectors.entryFields.submit)
        for (var key in data.badData.invalidChar.alpha) {
            if (data.badData.invalidChar.alpha.hasOwnProperty(key)) {
                browser.expect.element(selectors.entryFields.errorList).text.to.contain(data.expectedError.invalidChar[key])
            }
        }


        functions.fillForm(data.goodData.allTest, browser)
        for (var key in data.badData.invalidChar.numeric) {
            if (data.badData.invalidChar.numeric.hasOwnProperty(key)) {
                functions.enterValue(selectors.entryFields[key], data.badData.invalidChar.numeric[key], browser)
            }
        }
        browser.click(selectors.entryFields.submit)
        for (var key in data.badData.invalidChar.numeric) {
            if (data.badData.invalidChar.numeric.hasOwnProperty(key)) {
                browser.expect.element(selectors.entryFields.errorList).text.to.contain(data.expectedError.invalidChar[key])
            }
        }

        functions.fillForm(data.goodData.allTest, browser)
        for (var key in data.badData.invalidChar.specialChar) {
            if (data.badData.invalidChar.specialChar.hasOwnProperty(key)) {
                functions.enterValue(selectors.entryFields[key], data.badData.invalidChar.specialChar[key], browser)
            }
        }
        browser.click(selectors.entryFields.submit)
        for (var key in data.badData.invalidChar.specialChar) {
            if (data.badData.invalidChar.specialChar.hasOwnProperty(key)) {
                browser.expect.element(selectors.entryFields.errorList).text.to.contain(data.expectedError.invalidChar[key])
            }
        }
    },
    'Optional field testing': browser => {
        browser.click(selectors.topNav.enterPage)
        browser.click(selectors.entryFields.clear)
        functions.fillForm(data.goodData.basicTest, browser)
        functions.enterValue(selectors.entryFields.dlExpiration, data.goodData.allTest.dlExpiration, browser) 
        functions.enterValue(selectors.entryFields.dlState, data.goodData.allTest.dlState, browser) 
        browser.click(selectors.entryFields.submit)
            .expect.element(selectors.entryFields.errorList).text.to.contain(data.expectedError.dlIncomplete.message)

        browser.click(selectors.entryFields.clear)
        functions.fillForm(data.goodData.basicTest, browser)
        functions.enterValue(selectors.entryFields.dlExpiration, data.goodData.allTest.dlExpiration, browser) 
        functions.enterValue(selectors.entryFields.dlState, data.goodData.allTest.dlState, browser) 
        browser.click(selectors.entryFields.submit)
            .expect.element(selectors.entryFields.errorList).text.to.contain(data.expectedError.dlIncomplete.message)

        browser.click(selectors.entryFields.clear)
        functions.enterValue(selectors.entryFields.dlExpiration, data.goodData.allTest.dlExpiration, browser) 
        functions.enterValue(selectors.entryFields.dl, data.goodData.allTest.dl, browser) 
        browser.click(selectors.entryFields.submit)
            .expect.element(selectors.entryFields.errorList).text.to.contain(data.expectedError.dlIncomplete.message)
        

        browser.click(selectors.entryFields.clear)
        functions.fillForm(data.goodData.basicTest, browser)
        functions.enterValue(selectors.entryFields.lpExpiration, data.goodData.allTest.lpExpiration, browser) 
        functions.enterValue(selectors.entryFields.lpState, data.goodData.allTest.lpState, browser) 
        browser.click(selectors.entryFields.submit)
            .expect.element(selectors.entryFields.errorList).text.to.contain(data.expectedError.lpIncomplete.message)

        browser.click(selectors.entryFields.clear)
        functions.fillForm(data.goodData.basicTest, browser)
        functions.enterValue(selectors.entryFields.lp, data.goodData.allTest.lp, browser) 
        functions.enterValue(selectors.entryFields.lpState, data.goodData.allTest.lpState, browser)
        browser.click(selectors.entryFields.submit)
            .expect.element(selectors.entryFields.errorList).text.to.contain(data.expectedError.lpIncomplete.message)


        browser.click(selectors.entryFields.clear)
        functions.fillForm(data.goodData.basicTest, browser)
        functions.enterValue(selectors.entryFields.lpExpiration, data.goodData.allTest.lpExpiration, browser) 
        functions.enterValue(selectors.entryFields.lp, data.goodData.allTest.lp, browser)
        browser.click(selectors.entryFields.submit)
            .expect.element(selectors.entryFields.errorList).text.to.contain(data.expectedError.lpIncomplete.message)

    }
}