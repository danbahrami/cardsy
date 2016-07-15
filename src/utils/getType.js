import getTemplate from "./getTemplate"

/**
 * cardsy.getType
 *
 * @param {string|number} number - A card number
 *
 * @returns {string|null} The matching card type as found in template.js
 */
const getType = number => {
    const template = getTemplate.byNumber(number)

    return template ? template.type : null
}

export default getType