import card from "./utils/cardUtils"
import string from "./utils/stringUtils"

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
const number = (number) => {
    number = string.stripWhiteSpace(number)
    const template = card.getTemplate.byNumber(number)

    // Did we find a matching template?
    if (!template) {
        return false
    }

    // Is the number a valid length for it's type?
    if (template.lengths.indexOf(number.length) === -1) {
        return false
    }

    // Does the number pass Luhn check if required?
    if (template.luhn && !card.luhnCheck(number)) {
        return false
    }

    // OK!
    return true
}

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
const expiry = (month, year) => {
    // Are all parameters present?
    if (!month || !year) {
        return false
    }

    month = month.toString()
    year = year.toString()

    // Are month and year numeric strings?
    if (!string.isNumeric(month) || !string.isNumeric(year)) {
        return false
    }

    // Is it a valid month?
    //
    // p.s. if any payment providers ever adopt the International Fixed
    // Calendar we may need another library that can handle 13 months
    if (parseInt(month) > 12 || parseInt(month) <= 0) {
        return false
    }

    // Is the year a valid length?
    if (!(year.length === 2 || year.length === 4)) {
        return false
    }

    // If the year is 2 digits create a 4 digit year using current century prefix
    if (year.length === 2) {
        let prefix = (new Date).getFullYear()
        prefix = prefix.toString().slice(0, 2)
        year = prefix + year
    }

    const now = new Date;
    let expiry = new Date(year, month)
    expiry.setMonth(expiry.getMonth(), 1)

    //Is the given date in the past?
    if (expiry <= now) {
        return false
    }

    //OK!
    return true
}

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
const cvc = (cvc, type) => {
    cvc = string.stripWhiteSpace(cvc)
    const template = card.getTemplate.byType(type)

    //Are our parameters present and correct?
    if (!cvc || !string.isNumeric(cvc) || !template) {
        return false
    }

    //Is the cvc a valid length?
    if (template.cvcLengths.indexOf(cvc.length) === -1) {
        return false
    }

    //OK!
    return true
}

module.exports = {
    cvc,
    expiry,
    number
}