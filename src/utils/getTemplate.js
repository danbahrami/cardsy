import stripWhiteSpace from "./stripWhiteSpace"
import templates from "./templates"

const byNumber = number => {
    if(!number) {
        return null
    }

    number = stripWhiteSpace(number)

    return templates.find((template) => template.pattern.test(number))
}

const byType = type => {
    return templates.find((template) => template.type === type)
}

export default {
    byNumber,
    byType
}