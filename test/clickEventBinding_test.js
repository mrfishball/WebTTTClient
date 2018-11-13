describe('Bind click events to each spot on the board', () => {
  it('binds a click event to a spot', () => {
    const emptySpot = '<div class="spot" id="emptySpot"></div>'
    document.body.insertAdjacentHTML('afterbegin', emptySpot)

    const spotToBeClicked = document.getElementById('emptySpot')
    const aClickEvent = spyOn(spotToBeClicked, 'click')
    spotToBeClicked.click()

    expect(aClickEvent).toHaveBeenCalled()
  })
})
