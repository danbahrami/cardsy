import card from "./utils/cardUtils"
import string from "./utils/stringUtils"

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
const number = (number) => {
    let template, maxLength
    
    number = string.stripNonNumeric(number)
    template = card.getTemplate.byNumber(number)

    if(!template) {
        return number
    }

    const { lengths, spaces } = template

    maxLength = lengths[lengths.length - 1] + spaces.length

    number = string.insertSpaces(number, spaces)
    number = number.substr(0, maxLength)

    return number
}

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
const cvc = cvc => {
    cvc = string.stripNonNumeric(cvc)
    cvc = string.trimToLength(cvc, 4)

    return cvc
}

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
const expiry = (month, year, separator = " / ") => {
    month = string.stripNonNumeric(month)
    year = string.stripNonNumeric(year)

    if(parseInt(month[0]) > 1) {
        month = "0" + month
    }

    if(!year) {
        return month
    }

    year = year.slice(-2)

    return month + separator + year
}

export default {
    cvc,
    expiry,
    number
}