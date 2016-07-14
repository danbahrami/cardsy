import stripWhiteSpace from "./stripWhiteSpace"
import templates from "./templates"

export default number => {
    if(!number) {
        return null
    }

    number = stripWhiteSpace(number)

    return templates.find((template) => template.pattern.test(number))
}