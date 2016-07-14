import stripWhiteSpace from "./utils/stripWhiteSpace"
import getTemplate from "./utils/getTemplate"
import luhnCheck from "./utils/luhnCheck"

/**
 * card.validate.number
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
const number = number => {
    number = stripWhiteSpace(number)
    const template = getTemplate.byNumber(number)

    // Did we find a matching template?
    if(!template) {
        return false
    }

    // Is the number a valid length for it's type?
    if(template.lengths.indexOf(number.length) === -1) {
        return false
    }

    // Does the number pass Luhn check if required?
    if(template.luhn && !luhnCheck(number)) {
        return false
    }

    // OK!
    return true
}

/**
 * card.validate.expiry
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
    
}

/**
 * card.validate.cvc
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

}

export default {
    cvc,
    expiry,
    number
}