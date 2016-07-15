import test from "tape"
import validate from "../../../src/validate"

test("cardsy.validate.cvc should validate int", assert => {
    //Arrange
    let isValid
    let cvc = 123
    let type = "VISA"

    //Act
    isValid = validate.cvc(cvc, type)

    //Assert
    assert.equal(isValid, true, "Returns true if a cvc is a valid int")

    assert.end()
})