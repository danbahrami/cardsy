"use strict";

var _cardUtils = require("./utils/cardUtils");

var _cardUtils2 = _interopRequireDefault(_cardUtils);

var _stringUtils = require("./utils/stringUtils");

var _stringUtils2 = _interopRequireDefault(_stringUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * cardsy.format.number
 *
 * Accepts a card number as a string or integer and returns a new string
 * with any non-numeric characters stripped and with whitespace added
 * in the appropriate places if there's a matching card type.
 *
 * @param {string|number} number - A card number
 *
 * @returns {string} The formatted card number
 */
var number = function number(_number) {
    var template = void 0,
        maxLength = void 0;

    _number = _stringUtils2.default.stripNonNumeric(_number);
    template = _cardUtils2.default.getTemplate.byNumber(_number);

    if (!template) {
        return _number;
    }

    var _template = template;
    var lengths = _template.lengths;
    var spaces = _template.spaces;


    maxLength = lengths[lengths.length - 1] + spaces.length;

    _number = _stringUtils2.default.insertSpaces(_number, spaces);
    _number = _number.substr(0, maxLength);

    return _number;
};

/**
 * cardsy.format.cvc
 *
 * Accepts a card security code (CVC) as a string or integer
 * and returns a new string with any non-number characters
 * stripped and trimmed to a maximum of 4 characters.
 *
 * @param {string|number} cvc - A card CVC security code
 *
 * @returns {string} The formatted CVC code
 */
var cvc = function cvc(_cvc) {
    _cvc = _stringUtils2.default.stripNonNumeric(_cvc);
    _cvc = _stringUtils2.default.trimToLength(_cvc, 4);

    return _cvc;
};

/**
 * cardsy.format.expiry
 *
 * Accepts an expiry month and year as strings or integers, formats
 * them to two digit strings and adds a separator between them.
 * The separator is only added if a value is passed as year.
 *
 * @param {string|number} month - Card expiry date month
 * @param {string|number} year - Card expiry year as either 2 or 4 digits (16 or 2016)
 * @param {string} [separator= / ] - The string that separates month and year
 *
 * @returns {string} The formatted Expiry date
 */
var expiry = function expiry(month, year) {
    var separator = arguments.length <= 2 || arguments[2] === undefined ? " / " : arguments[2];

    month = _cardUtils2.default.getAutoCompleteMonth(month);
    year = _stringUtils2.default.stripNonNumeric(year);

    if (!year) {
        return month;
    }

    year = year.slice(-2);

    return month + separator + year;
};

/**
 * cardsy.format.expiryString
 *
 * Accepts a potentially incomplete string in the format `mm${separator}yy`
 * and attempts to formatted it to `mm${separator}yy`. If a two digit
 * month is passed as expiry, the return will be `mm${separator}`.
 * If part of the separator is removed from the expiry string it
 * will return only the first digit of the month.
 *
 * This method is meant to be used for accepting the string value
 * of an input and formatting the input value as the user types.
 *
 * @param {string} expiry - An expiry date string in the format `mm${separator}yy`
 * @param {string} [separator= / ] - The string that separates month and year
 *
 * @returns {string} An expiry string in the format of `mm${separator}yy`
 */
var expiryString = function expiryString(expiry) {
    var separator = arguments.length <= 1 || arguments[1] === undefined ? " / " : arguments[1];

    var formattedExpiry = void 0,
        month = void 0;

    //Start by getting the month
    formattedExpiry = month = _cardUtils2.default.getAutoCompleteMonth(_stringUtils2.default.trimToLength(expiry, 2));

    //If the month is complete add separator
    if (formattedExpiry.length === 2) {
        formattedExpiry = formattedExpiry + separator;
    }

    //If expiry contains separator already, find year and return formatted
    if (_stringUtils2.default.contains(expiry, separator)) {
        var yearIndex = expiry.indexOf(separator) + separator.length;
        var year = expiry.substr(yearIndex, expiry.length - 1);
        year = _stringUtils2.default.stripNonNumeric(year);
        year = _stringUtils2.default.trimToLength(year, 2);
        return formattedExpiry + year;
    }

    if (_stringUtils2.default.containsPartOf(expiry, separator)) {
        return _stringUtils2.default.trimToLength(month, 1);
    }

    return formattedExpiry;
};

module.exports = {
    cvc: cvc,
    expiry: expiry,
    expiryString: expiryString,
    number: number
};