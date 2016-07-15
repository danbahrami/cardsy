const trimToLength = (value, length) => {
    return value.substr(0, length)
}

const insertSpaces = (value, spaces = []) => {
    spaces.forEach((space) => {
        value = value.slice(0, parseInt(space)) + " " + value.slice(parseInt(space))
    })

    return value.trim()
}

const stripWhiteSpace = (value) => {
    return value.toString().replace(/ /g, "")
}

const stripNonNumeric = (value) => {
    return value.toString().replace(/\D+/g, "")
}

const isNumeric = (value) => {
    return /^\d+$/.test(value)
}

export default {
    trimToLength,
    insertSpaces,
    stripWhiteSpace,
    stripNonNumeric,
    isNumeric
}