import test from "tape"
import card from "../../../src/utils/cardUtils"

test("getAutoCompleteMonth should strip whitespace", assert => {
    //Arrange
    let formattedMonth
    const month = "1  2 "

    //Act
    formattedMonth = card.getAutoCompleteMonth(month)

    //Assert
    assert.equal(formattedMonth, "12", "Strips whitespace")

    assert.end()
})