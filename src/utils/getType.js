import getTemplate from "./getTemplate"

/**
 * GetType
 * @param {string|number} number - A card number
 * @returns {string}
 */
const getType = number => {
    const template = getTemplate(number)

    return (template) ? template.type : null
}

export default getType