import getTemplate from "./getTemplate"

/**
 * card.getType
 * 
 * @param {string|number} number - A card number
 *
 * @returns {string} The matching card type as found in template.js
 */
const getType = number => {
    const template = getTemplate.byNumber(number)

    return (template) ? template.type : null
}

export default getType