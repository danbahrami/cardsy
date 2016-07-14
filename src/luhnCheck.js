export default number => {
    let digit
    let odd = true
    let sum = 0
    let digits = (number + "").split("").reverse()

    for (let i = 0; i < digits.length; i++) {
        digit = parseInt(digits[i], 10)
        if ((odd = !odd)) {
            digit *= 2
        }
        if (digit > 9) {
            digit -= 9
        }
        sum += digit
    }

    return sum % 10 === 0
}