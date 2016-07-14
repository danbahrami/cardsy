import test from "tape"
import validate from "../../src/validate"

test("card.validate.number should return false if number is empty or falsy", assert => {
    //Arrange
    let nullType, undefinedType, emptyType, whiteSpaceType
    
    //Act
    nullType = validate.number(null)
    undefinedType = validate.number(undefined)
    emptyType = validate.number("")
    whiteSpaceType = validate.number(" ")

    //Assert
    assert.equal(nullType, false, "Returns false if null is passed to function")
    assert.equal(undefinedType, false, "Returns false if undefined is passed to function")
    assert.equal(emptyType, false, "Returns false if empty string is passed to function")
    assert.equal(whiteSpaceType, false, "Returns false if white space is passed to function")

    assert.end()
})