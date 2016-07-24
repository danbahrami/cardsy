#Cardsy

> A small functional Javascript library for validating and formatting Credit and Debit card information.

##Introduction

Cardsy contains a simple api for formatting and validating credit card forms. It was originally based on the functionality of Stripe's [jQuery.payment](https://github.com/stripe/jquery.payment) library but without a dependency on jQuery.

Card types currently supported: 
- American Express
- Dankort
- Dinersclub
- Discover
- JCB
- Laser
- Maestro
- Mastercard
- Unionpay
- Visa
- Visaelectron

*Note: This library is for client-side validation and building UIs. If this library judges a card to be valid it* **does not** *promise the card will be deemed valid or accepted by any payment providers. Never use this as your only card validation!*

##Usage

To use in your project first install it via npm...

```
npm install cardsy
```

Then require into your project...

```
var cardsy = require("cardsy")
```

Using ES6 import syntax...

```
import cardsy from "cardsy"
```

##cardsy.getType

```
cardsy.getType(card_number)
```

Each card type has a pattern that the card number conforms to. This method accepts a card number as a string or number and returns the card type as a capitalised string (e.g. "VISA", "AMEX", "MASTERCARD").

Most card type patterns can be matched in the first 4 digits of a card number. If the card does not match any pattern it returns null.

##cardsy.validate

cardsy.validate contains a set of methods for validating card info. This part of the library is for performing inline validation of credit card forms on the fly as the user types. The methods are...

###cardsy.validate.number

```
cardsy.validate.number(card_number)
```

Accepts a card number as a string or number and returns a boolean value. Returns `true` if the card number passes the following conditions...

- It matches one of the supported card type patterns
- It is the correct length
- It is an integer or contains only numeric characters
- It passes a [Luhn Check](https://en.wikipedia.org/wiki/Luhn_algorithm)

Otherwise it returns `false`.

###cardsy.validate.expiry

```
cardsy.validate.expiry(month, year)
```

Accepts a month and year value as strings or numbers and returns a boolean value. The year can be in a 2-digit or 4-digit format *(e.g. "16" or "2016")* and the month can be in a 1-digit or 2-digit format *(e.g. "4" or "04")*.

Returns `true` if the month and year conform to the following conditions...

- They are both integers or contain only numeric characters
- The month is between 1 and 12
- The year is either 2 or 4 digits
- The expiry date is in the future (this month or later)

Otherwise it returns `false`.

###cardsy.validate.expiryString

```
cardsy.validate.expiryString(card_expiry, separator = " / ")
```

This method is aimed at validating text inputs who's value is in the format of `mm{{ separator }}yy`. It accepts a string in the same format and the separator itself as a string, for example if your input is in the format of `"mm / yy"` then the separator is `" / "` and a valid date would be "04 / 36".

 Returns true on the following conditions...

- The month and year part of the string resolve to a valid expiry when passed to cardsy.validate.expiry
- The string is in the format `mm{{ separator }}yy`

Otherwise it returns `false`.

###cardsy.validate.cvc

```
cardsy.validate.cvc(card_cvc, card_type)
```

Accepts a card security (CVC) code as a string or number and a card type (as returned from `cardsy.getType()`) as a string. The card type is needed because different card types use different lengths CVC codes. Returns `true` on the following conditions...

- The CVC code is an integer or contains only numeric characters
- The card type is a supported card type
- The CVC code is the correct length for the card type

Otherwise it returns `false`.

##cardsy.format

cardsy.format contains a set of methods for formatting card info. This part of the library is aimed at formatting inputs in credit card forms on the fly as the user types. The methods are...

###cardsy.format.number

```
cardsy.format.number(card_number)
```

Accepts a card number as a string or number and returns a string with all non-numeric characters removed, spaces put in the appropriate places and trimmed to the correct length based on the card type the number conforms to. As an example...

```
var card_number = cardsy.format.number(4242424242424242)

console.log(card_number) // "4242 4242 4242 4242"
```

Using this method to update the value of a card number text input while the user types results in the effect that the input ignores anything that isn't a number and that spaces appear at the correct points.

If the card number doesn't conform to any card type then no spaces will be inserted in the returned output.

###cardsy.format.expiry

```
cardsy.format.expiry(month, year, separator = " / ")
```

Accepts an expiry month and year as strings or numbers and a separator as a string and returns a formatted expiry string in the format of `mm{{ separator }}yy`.

###cardsy.format.expiryString

```
cardsy.format.expiryString(card_expiry, separator = " / ")
```

This method is for formatting an expiry string input where both month and year values are entered into the same input. When used to update the input value as the user types will give the effect that the input ignores any non-numeric characters, will autocomplete months where possible (e.g. "4" will be autocompleted to "04") and a the separtor provided as the second parameter will be inserted after the user has finished typing the month.

As an example...

```
var card_expiry = cardsy.format.expiryString("4")
var custom_separator = cardsy.format.expiryString("4", " ?* ")
var full_expiry = cardsy.format.expiryString("04 / 19")

console.log(card_number) // "04 / "
console.log(custom_separator) // "04 ?* "
console.log(full_expiry) // "04 / 19"
```

###cardsy.format.cvc

```
cardsy.format.cvc(card_cvc)
```

Accepts a card cvc code as a string or a number and returns a string, stripped of all numeric characters and trimmed to 4 characters.