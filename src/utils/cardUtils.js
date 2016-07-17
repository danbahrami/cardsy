import string from "./stringUtils"
import templates from "./templates"

/**
 * cardsy.getType
 *
 * @param {string|number} number - A card number
 *
 * @returns {string|null} The matching card type as found in template.js
 */
const getType = (number) => {
    const template = getTemplateByNumber(number)

    return template ? template.type : null
}

const getTemplateByNumber = (number) => {
    if (!number) {
        return null
    }

    number = string.stripWhiteSpace(number)

    return templates.find((template) => template.pattern.test(number))
}

const getTemplateByType = (type) => {
    return templates.find((template) => template.type === type)
}

/**
 * getAutoCompleteMonth
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