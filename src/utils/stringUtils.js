const contains = (haystack, needle) => {
    return haystack.indexOf(needle) !== -1
}

const containsPartOf = (haystack, needle) => {
    for (let char of needle.split("")) {
        if(contains(haystack, char)) {
            return true
        }
    }

    return false
}

const insertSpaces = (value, spaces = []) => {
    spaces.forEach((space) => {
        value = value.slice(0, parseInt(space)) + " " + value.slice(parseInt(space))
    })

    return value.trim()
}

const isNumeric = (value) => {
    return /^\d+$/.test(value)
}

const stripNonNumeric = (value) => {
    return value.toString().replace(/\D+/g, "")
}

const stripWhiteSpace = (value) => {
    return value.toString().replace(/ /g, "")
}

const trimToLength = (value, length) => {
    return value.substr(0, length)
}

module.exports = {
    contains,
    containsPartOf,
    insertSpaces,
    isNumeric,
    stripNonNumeric,
    stripWhiteSpace,
    trimToLength
}