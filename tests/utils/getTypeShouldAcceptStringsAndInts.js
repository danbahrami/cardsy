import test from "tape"
import card from "../../src/utils/cardUtils"

test("cardsy.getType should accepts strings and integers", assert => {
    //Arrange
    let stringType, intType
    let numberAsString = "4242"
    let numberAsInt = 4242

    //Act
    stringType = card.getType(numberAsString)
    intType = card.getType(numberAsInt)

    //Assert
    assert.equal(stringType, "VISA", "Returns correct type for strings")
    assert.equal(intType, "VISA", "Returns correct type for integers")

    assert.end()
})