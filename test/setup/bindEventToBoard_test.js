import { bindEventToBoard } from '../../src/app/components/setup/bindEventToBoard'

describe('Bind click events to each spot on the board', () => {
  function buildComputerController () {
    return {
      makeComputerMove: () => {}
    }
  }

  function buildHumanController () {
    return {
      makeAMove: () => { return true }
    }
  }

  function buildElement () {
    const element = '<div class="spot" id="aSpot" data-index="1"></div>'
    document.body.insertAdjacentHTML('afterbegin', element)
    return document.getElementById('aSpot')
  }

  it('tells the human move controller to make a move', () => {
    let spotToBeClicked = buildElement()
    let humanController = buildHumanController()
    let computerController = buildComputerController()
    bindEventToBoard(humanController, computerController)

    let aClickEvent = spyOn(humanController, 'makeAMove')
    spotToBeClicked.click()

    expect(aClickEvent).toHaveBeenCalled()
  })

  describe('when human player fails to make a move', () => {
    let humanController = {
      makeAMove: () => { return false }
    }

    it('will not let computer make a move', () => {
      let spotToBeClicked = buildElement()
      let computerController = buildComputerController()
      bindEventToBoard(humanController, computerController)

      let aClickEvent = spyOn(computerController, 'makeComputerMove')
      spotToBeClicked.click()

      expect(aClickEvent).not.toHaveBeenCalled()
    })
  })

  describe('when human player makes a move successfully', () => {
    it('lets the computer make a move', () => {
      let spotToBeClicked = buildElement()
      let humanController = buildHumanController()
      let computerController = buildComputerController()
      bindEventToBoard(humanController, computerController)

      let aClickEvent = spyOn(computerController, 'makeComputerMove')
      spotToBeClicked.click()

      expect(aClickEvent).toHaveBeenCalled()
    })
  })
})
