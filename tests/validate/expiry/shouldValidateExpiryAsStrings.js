import test from "tape"
import validate from "../../../src/validate"

test("card.validate.expiry should validate strings", assert => {
    //Arrange
    let isValid
    const month = "06"
    const year = "99"

    //Act
    isValid = validate.expiry(month, year)

    //Assert
    assert.equal(isValid, true, "Returns true when valid string params are passed")

    assert.end()
})