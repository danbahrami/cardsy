import test from "tape"
import card from "../../../src/utils/cardUtils"

test("getAutoCompleteMonth should strip non-numeric characters", assert => {
    //Arrange
    let formattedMonth
    const month = "1*D?2"

    //Act
    formattedMonth = card.getAutoCompleteMonth(month)

    //Assert
    assert.equal(formattedMonth, "12", "Strips non-numeric characters")

    assert.end()
})