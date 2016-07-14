import getTemplate from "./getTemplate"

export default number => {
    const template = getTemplate(number)

    return (template) ? template.type : null
}