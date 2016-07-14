export default value => {
    if(!value || typeof value.toString === "undefined") {
        return ""
    }

    return value.toString().replace(/ /g, "")
}