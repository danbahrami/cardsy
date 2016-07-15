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
    luhnCheck
}