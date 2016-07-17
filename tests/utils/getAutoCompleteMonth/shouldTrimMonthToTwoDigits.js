import test from "tape"
import card from "../../../src/utils/cardUtils"

test("getAutoCompleteMonth should trim month to 2 digits", assert => {
    //Arrange
    let formattedMonth
    const month = "123"

    //Act
    formattedMonth = card.getAutoCompleteMonth(month)

    //Assert
    assert.equal(formattedMonth, "12", "Trims month to 2 digits")

    assert.end()
})