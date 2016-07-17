import string from "./stringUtils"
import templates from "./templates"

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
const getType = (number) => {
    const template = getTemplateByNumber(number)

    return template ? template.type : null
}

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
const getTemplateByNumber = (number) => {
    if (!number) {
        return null
    }

    number = string.stripWhiteSpace(number)

    return templates.find((template) => template.pattern.test(number))
}

/**
 * getTemplateByType (Private)
 *
 * Accepts a card number as a string or an integer and returns the template
 * of the matching card type as found in src/utils/template.js. If the
 * card number matches no card type patterns it returns null.
 *
 * @param {string} type - A capitalised card type (e.g. "VISA")
 *
 * @returns {object|null} as found in src/utils/template.js
 */
const getTemplateByType = (type) => {
    return templates.find((template) => template.type === type)
}

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
const getAutoCompleteMonth = (month) => {
    month = string.stripNonNumeric(month)

    if(parseInt(month[0]) > 1) {
        month = "0" + month
    }

    month = string.trimToLength(month, 2)

    return month
}

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
const luhnCheck = (number) => {
    let digit
    let odd = true
    let sum = 0
    let digits = (number + "").split("").reverse()

    for (let i = 0; i < digits.length; i++) {
        digit = parseInt(digits[i], 10)
        if ((odd = !odd)) {
            digit *= 2
        }
        if (digit > 9) {
            digit -= 9
        }
        sum += digit
    }

    return sum % 10 === 0
}

export default {
    getTemplate : {
        byNumber : getTemplateByNumber,
        byType : getTemplateByType
    },
    getType,
    getAutoCompleteMonth,
    luhnCheck
}