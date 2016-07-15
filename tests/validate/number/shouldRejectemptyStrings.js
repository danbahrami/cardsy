import test from "tape"
import validate from "../../../src/validate"

test("card.validate.number should return false if number is an empty string or whitespace", assert => {
    //Arrange
    let emptyType, whiteSpaceType
    
    //Act
    emptyType = validate.number("")
    whiteSpaceType = validate.number(" ")

    //Assert
    assert.equal(emptyType, false, "Returns false if empty string is passed")
    assert.equal(whiteSpaceType, false, "Returns false if white space is passed")

    assert.end()
})