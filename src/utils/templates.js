const templates = [
    {
        type       : "AMEX",
        pattern    : /^3[47]/,
        spaces     : [3, 9],
        lengths    : [15],
        cvcLengths : [3, 4],
        luhn       : true
    },
    {
        type       : "DANKORT",
        pattern    : /^5019/,
        spaces     : [4, 9, 14],
        lengths    : [16],
        cvcLengths : [3],
        luhn       : true
    },
    {
        type       : "DINERSCLUB",
        pattern    : /^(36|38|30[0-5])/,
        spaces     : [4, 9, 14],
        lengths    : [14],
        cvcLengths : [3],
        luhn       : true
    },
    {
        type       : "DISCOVER",
        pattern    : /^(6011|65|64[4-9]|622)/,
        spaces     : [4, 9, 14],
        lengths    : [16],
        cvcLengths : [3],
        luhn       : true
    },
    {
        type       : "JCB",
        pattern    : /^35/,
        spaces     : [4, 9, 14],
        lengths    : [16],
        cvcLengths : [3],
        luhn       : true
    },
    {
        type       : "LASER",
        pattern    : /^(6706|6771|6709)/,
        spaces     : [4, 9, 14],
        lengths    : [16, 17, 18, 19],
        cvcLengths : [3],
        luhn       : true
    },
    {
        type       : "MAESTRO",
        pattern    : /^(5018|5020|5038|6304|6703|6759|676[1-3])/,
        spaces     : [4, 9, 14],
        lengths    : [12, 13, 14, 15, 16, 17, 18, 19],
        cvcLengths : [3],
        luhn       : true
    },
    {
        type       : "MASTERCARD",
        pattern    : /^5[1-5]/,
        spaces     : [4, 9, 14],
        lengths    : [16],
        cvcLengths : [3],
        luhn       : true
    },
    {
        type       : "UNIONPAY",
        pattern    : /^62/,
        spaces     : [4, 9, 14],
        lengths    : [16, 17, 18, 19],
        cvcLengths : [3],
        luhn       : false
    },
    {
        type       : "VISAELECTRON",
        pattern    : /^4(026|17500|405|508|844|91[37])/,
        spaces     : [4, 9, 14],
        lengths    : [16],
        cvcLengths : [3],
        luhn       : true
    },
    {
        type       : "VISA",
        pattern    : /^4/,
        spaces     : [4, 9, 14],
        lengths    : [13, 14, 15, 16],
        cvcLengths : [3],
        luhn       : true
    }
]

module.exports = templates