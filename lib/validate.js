"use strict";

var _cardUtils = require("./utils/cardUtils");

var _cardUtils2 = _interopRequireDefault(_cardUtils);

var _stringUtils = require("./utils/stringUtils");

var _stringUtils2 = _interopRequireDefault(_stringUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * cardsy.validate.number
 *
 * Accepts a card number as a string or integer and returns a boolean
 * value for isValid based on whether it matches a card type, is a
 * valid length and, if required, the number passes a Luhn Check.
 *
 * https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {string|number} number - A card number
 *
 * @returns {boolean} Is card number valid
 */
var number = function number(_number) {
    _number = _stringUtils2.default.stripWhiteSpace(_number);
    var template = _cardUtils2.default.getTemplate.byNumber(_number);

    // Did we find a matching template?
    if (!template) {
        return false;
    }

    // Is the number a valid length for it's type?
    if (template.lengths.indexOf(_number.length) === -1) {
        return false;
    }

    // Does the number pass Luhn check if required?
    if (template.luhn && !_cardUtils2.default.luhnCheck(_number)) {
        return false;
    }

    // OK!
    return true;
};

/**
 * cardsy.validate.expiry
 *
 * Accepts an expiry month and year and returns a boolean
 * value for isValid based on if the month and year
 * resolve to a real date that is not in the past.
 *
 * @param {string|number} month - The expiry month
 * @param {string|number} year - The expiry year
 *
 * @returns {boolean} Is card expiry valid
 */
var expiry = function expiry(month, year) {
    // Are all parameters present?
    if (!month || !year) {
        return false;
    }

    month = month.toString();
    year = year.toString();

    // Are month and year numeric strings?
    if (!_stringUtils2.default.isNumeric(month) || !_stringUtils2.default.isNumeric(year)) {
        return false;
    }

    // Is it a valid month?
    //
    // p.s. if any payment providers ever adopt the International Fixed
    // Calendar we may need another library that can handle 13 months
    if (parseInt(month) > 12 || parseInt(month) <= 0) {
        return false;
    }

    // Is the year a valid length?
    if (!(year.length === 2 || year.length === 4)) {
        return false;
    }

    // If the year is 2 digits create a 4 digit year using current century prefix
    if (year.length === 2) {
        var prefix = new Date().getFullYear();
        prefix = prefix.toString().slice(0, 2);
        year = prefix + year;
    }

    var now = new Date();
    var expiry = new Date(year, month);
    expiry.setMonth(expiry.getMonth(), 1);

    //Is the given date in the past?
    if (expiry <= now) {
        return false;
    }

    //OK!
    return true;
};

/**
 * cardsy.validate.expiryString
 *
 * Accepts an expiry string in the format of `mm${separator}yy` and returns
 * a boolean value for isValid based on if the string is in the correct
 * format and if the month and year resolve to a valid expiry date.
 *
 * This method is meant to be used for accepting the string value
 * of an input and validating if it resolves to a valid expiry.
 *
 * @param {string} expiryString - an expiry string in the format `mm${separator}yy`
 * @param {string} separator - the string that separates the month and year
 *
 * @returns {boolean} Is expiry string valid
 */
var expiryString = function expiryString(_expiryString, separator) {
    var parts = _expiryString.split(separator);

    // Did the string contain three parts with
    // the middle being the separator?
    if (parts.length !== 2) {
        return false;
    }

    // Do the parts either side of the separator
    // resolve to a valid expiry?
    return expiry(parts[0], parts[1]);
};

/**
 * cardsy.validate.cvc
 *
 * Accepts a CVC code and card type and returns a boolean value
 * for isValid based on if the CVC is numerical and if it is
 * the correct length based on the card type.
 *
 * @param {string|number} cvc - A card CVC security code
 * @param {string} type - The card type as it appears in utils/templates.js
 *
 * @returns {boolean} Is CVC code valid
 */
var cvc = function cvc(_cvc, type) {
    _cvc = _stringUtils2.default.stripWhiteSpace(_cvc);
    var template = _cardUtils2.default.getTemplate.byType(type);

    //Are our parameters present and correct?
    if (!_cvc || !_stringUtils2.default.isNumeric(_cvc) || !template) {
        return false;
    }

    //Is the cvc a valid length?
    if (template.cvcLengths.indexOf(_cvc.length) === -1) {
        return false;
    }

    //OK!
    return true;
};

module.exports = {
    cvc: cvc,
    expiry: expiry,
    expiryString: expiryString,
    number: number
};