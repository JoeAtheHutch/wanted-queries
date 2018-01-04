const data = require('./test_data')
const selectors = require('./css_selectors')

/**
 * enterFormData to enter the values into the new warrant page the Wanted-Queries project. It will use the key values from the dataSet passed in to pull the selector field
 * 
 * @dataSet [] array containing the data to be entered into the form
 * @browser The browser object that represents the test environment
 */
function enterFormData(dataSet, browser) {
    for (var key in dataSet) {
        if (dataSet.hasOwnProperty(key)) {
            enterValue(selectors.entryFields[key], dataSet[key], browser)
        }
    }
}

/**
 * enterCancelData to enter the values into the new warrant page the Wanted-Queries project. It will use the key values from the dataSet passed in to pull the selector field
 * 
 * @dataSet [] array containing the data to be entered into the form
 * @browser The browser object that represents the test environment
 */
function enterCancelData(dataSet, browser) {
    for (var key in dataSet) {
        if (dataSet.hasOwnProperty(key)) {
            enterValue(selectors.cancelFields[key], dataSet[key], browser)
        }
    }
}

/**
 * enterValue to enter a  values into a designated slector.
 * 
 * @selector the field to have data entered
 * @value the data to be entered into the field
 * @browser The browser object that represents the test environment
 */
function enterValue(selector, value, browser) {
    browser
        .clearValue(selector)
        .setValue(selector, value)
        .expect.element(selector).to.have.value.that.equals(value)
}

module.exports = {
    fillForm: enterFormData,
    enterValue: enterValue,
    cancelForm: enterCancelData
}