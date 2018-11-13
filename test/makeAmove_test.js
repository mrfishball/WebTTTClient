import { makeAMove } from '../src/app/components/play/makeAmove'

describe('Make a move', () => {
  function addClickEvent (element) {
    element.addEventListener('click', makeAMove)
  }

  describe('when a spot is empty', () => {
    it('marks the spot with an X', () => {
      const emptySpot = '<div class="spot" id="emptySpot"></div>'
      document.body.insertAdjacentHTML('afterbegin', emptySpot)

      const spotToBeClicked = document.getElementById('emptySpot')
      addClickEvent(spotToBeClicked)
      spotToBeClicked.click()

      expect(spotToBeClicked).toHaveClass('x')
    })
  })

  describe('when a spot is occupied', () => {
    it('will do nothing', () => {
      const spotWithAnO = '<div class="spot o" id="spotWithAnO"></div>'
      document.body.insertAdjacentHTML('afterbegin', spotWithAnO)

      const spotToBeClicked = document.getElementById('spotWithAnO')
      addClickEvent(spotToBeClicked)
      spotToBeClicked.click()

      expect(spotToBeClicked).toHaveClass('spot')
      expect(spotToBeClicked).toHaveClass('o')
      expect(spotToBeClicked).not.toHaveClass('x')
    })
  })
})
