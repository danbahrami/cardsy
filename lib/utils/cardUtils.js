"use strict";

var _stringUtils = require("./stringUtils");

var _stringUtils2 = _interopRequireDefault(_stringUtils);

var _templates = require("./templates");

var _templates2 = _interopRequireDefault(_templates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * cardsy.getType
 *
 * Accepts a card number as a string or an integer and returns the
 * card type as a capitalised string (e.g. "VISA"). If the card
 * number matches no card type patterns it returns null.
 *
 * @param {string|number} number - A card number
 *
 * @returns {string|null} The matching card type as found in template.js
 */
var getType = function getType(number) {
    var template = getTemplateByNumber(number);

    return template ? template.type : null;
};

/**
 * getTemplateByNumber (Private)
 *
 * Accepts a card number as a string or an integer and returns the template
 * of the matching card type as found in src/utils/template.js. If the
 * card number matches no card type patterns it returns null.
 *
 * @param {string|number} number - A card number
 *
 * @returns {object|null} The card template as found in src/utils/template.js
 */
var getTemplateByNumber = function getTemplateByNumber(number) {
    if (!number) {
        return null;
    }

    number = _stringUtils2.default.stripWhiteSpace(number);

    return _templates2.default.find(function (template) {
        return template.pattern.test(number);
    });
};

/**
 * getTemplateByType (Private)
 *
 * Accepts a card type as a string and returns the matching
 * template as found in src/utils/template.js. If the
 * type passed is not supported it returns null.
 *
 * @param {string} type - A capitalised card type (e.g. "VISA")
 *
 * @returns {object|null} The card template as found in src/utils/template.js
 */
var getTemplateByType = function getTemplateByType(type) {
    return _templates2.default.find(function (template) {
        return template.type === type;
    });
};

/**
 * getAutoCompleteMonth (Private)
 *
 * Accepts an expiry month as a string or integer and tries
 * to return a two character string description of that 
 * month. Any month that can be described in a single 
 * digit gets prefixed with a zero e.g. "3" => "03"
 *
 * @param {string|number} month - Card expiry date month
 *
 * @returns {string} The formatted expiry month
 */
var getAutoCompleteMonth = function getAutoCompleteMonth(month) {
    month = _stringUtils2.default.stripNonNumeric(month);

    if (parseInt(month[0]) > 1) {
        month = "0" + month;
    }

    month = _stringUtils2.default.trimToLength(month, 2);

    return month;
};

/**
 * luhnCheck (Private)
 *
 * Accepts a card number as a string or integer and returns a boolean
 * value for isValid based on whether the number passes a Luhn check.
 *
 * https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {string|number} number - A card number
 *
 * @returns {boolean} Does card number pass a Luhn check
 */
var luhnCheck = function luhnCheck(number) {
    var digit = void 0;
    var odd = true;
    var sum = 0;
    var digits = (number + "").split("").reverse();

    for (var i = 0; i < digits.length; i++) {
        digit = parseInt(digits[i], 10);
        if (odd = !odd) {
            digit *= 2;
        }
        if (digit > 9) {
            digit -= 9;
        }
        sum += digit;
    }

    return sum % 10 === 0;
};

module.exports = {
    getTemplate: {
        byNumber: getTemplateByNumber,
        byType: getTemplateByType
    },
    getType: getType,
    getAutoCompleteMonth: getAutoCompleteMonth,
    luhnCheck: luhnCheck
};