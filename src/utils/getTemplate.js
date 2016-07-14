import stripWhiteSpace from "./stripWhiteSpace"
import templates from "./templates"

/**
 * card.getTemplate
 *
 * @param {string|number} number - A card number
 *
 * @returns {object} The matching template as found in templates.js
 */
const getTemplate = number => {
    if(!number) {
        return null
    }

    number = stripWhiteSpace(number)

    return templates.find((template) => template.pattern.test(number))
}

export default getTemplate