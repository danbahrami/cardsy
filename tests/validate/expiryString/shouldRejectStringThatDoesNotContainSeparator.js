import test from "tape"
import validate from "../../../src/validate"

test("cardsy.validate.expiryString should reject the expiry string if it doesn't contain the separator", assert => {
    //Arrange
    let isValid
    const expiry = "01 ? 99"

    //Act
    isValid = validate.expiryString(expiry, " / ")

    //Assert
    assert.equal(isValid, false, "Returns false when the expiry string doesn't contain the separator")

    assert.end()
})