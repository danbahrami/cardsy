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

/**
 * cardsy.format.expiry.month
 *
 * Accepts an expiry month as a string or integer and returns
 * a two character string description of that month. Any
 * month that can be described in a single digit gets
 * prefixed with a zero For example "3" => "03".
 *
 * @param {string|number} month - Card expiry date month
 *
 * @returns {string} The formatted expiry month
 */
expiry.month = (month) => {

}

/**
 * cardsy.format.expiry.year
 *
 * Accepts an expiry year as a string or integer and returns a
 * two character string description of that year. The year
 * passed must be in a 2 digit or four digit format.
 *
 * @param {string|number} year - Card expiry date year
 *
 * @returns {string} The formatted expiry year
 */
expiry.year = (year) => {

}

/**
 * cardsy.format.expiry.fromString
 *
 * Accepts a potentially incomplete string in the format of `mm${separator}yy`
 * and attempts to formatted it to `mm${separator}yy`. If a 2 digit month
 * is passed as expiry, the return will be expiry + separator. If a
 * month and a part of the separator is passed it will remove the
 * incomplete separator string and only return the month.
 *
 * This method is meant to be used for accepting the string value
 * of an input and formatting the input value as the user types.
 *
 * @param {string} expiry
 * @param {string} [separator= / ] - The string that separates month and year
 *
 * @returns {string}
 */
expiry.fromString = (expiry, separator = " / ") => {

}

export default {
    cvc,
    expiry,
    number
}