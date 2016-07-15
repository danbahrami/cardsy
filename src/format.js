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
const number = number => {

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

}

/**
 * cardsy.format.expiry
 *
 * Accepts an expiry month and year as strings or integers and formats them
 * based on the pattern provided. The pattern must contain exactly 2 m's
 * and either 2 or 4 y's (to resolve, for example, to "16" or "2016").
 *
 * @param {string|number} month - Card expiry date month
 * @param {string|number} year - Card expiry year as either 2 or 4 digits (16 or 2016)
 * @param {string} [format=mm / yy] - The pattern you want the string formatted to
 *
 * @returns {string} The formatted Expiry date
 */
const expiry = (month, year, format = "mm / yy") => {

}

export default {
    cvc,
    expiry,
    number
}