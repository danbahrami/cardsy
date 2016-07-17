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
    month = card.getAutoCompleteMonth(month)
    year = string.stripNonNumeric(year)

    if(!year) {
        return month
    }

    year = year.slice(-2)

    return month + separator + year
}

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
const expiryString = (expiry, separator = " / ") => {
    let formattedExpiry, month

    //Start by getting the month
    formattedExpiry = month = card.getAutoCompleteMonth(
        string.trimToLength(expiry, 2)
    )

    //If the month is complete add separator
    if(formattedExpiry.length === 2) {
        formattedExpiry = formattedExpiry + separator
    }

    //If expiry contains separator already, find year and return formatted
    if(string.contains(expiry, separator)) {
        let yearIndex = expiry.indexOf(separator) + separator.length
        let year = expiry.substr(yearIndex, expiry.length - 1)
        year = string.stripNonNumeric(year)
        year = string.trimToLength(year, 2)
        return formattedExpiry + year
    }

    if(string.containsPartOf(expiry, separator)) {
        return string.trimToLength(month, 1)
    }

    return formattedExpiry
}

module.exports = {
    cvc,
    expiry,
    expiryString,
    number
}