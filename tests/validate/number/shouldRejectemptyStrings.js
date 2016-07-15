import test from "tape"
import validate from "../../../src/validate"

test("cardsy.validate.number should return false if number is an empty string or whitespace", assert => {
    //Arrange
    let isEmptyValid, isWhiteSpaceValid

    //Act
    isEmptyValid = validate.number("")
    isWhiteSpaceValid = validate.number(" ")

    //Assert
    assert.equal(isEmptyValid, false, "Returns false if empty string is passed")
    assert.equal(isWhiteSpaceValid, false, "Returns false if white space is passed")

    assert.end()
})