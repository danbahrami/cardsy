import test from "tape"
import validate from "../../../src/validate"

test("cardsy.validate.cvc should validate string", assert => {
    //Arrange
    let isValid
    let cvc = "123"
    let type = "VISA"

    //Act
    isValid = validate.cvc(cvc, type)

    //Assert
    assert.equal(isValid, true, "Returns true if the cvc is a valid string")

    assert.end()
})