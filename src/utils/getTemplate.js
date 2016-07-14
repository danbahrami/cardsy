import stripWhiteSpace from "./stripWhiteSpace"
import templates from "./templates"

/**
 * GetTemplate
 * @param {string|number} number - A card number
 * @returns {object}
 */
const getTemplate = number => {
    if(!number) {
        return null
    }

    number = stripWhiteSpace(number)

    return templates.find((template) => template.pattern.test(number))
}

export default getTemplate