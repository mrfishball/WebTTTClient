import HumanMoveController from '../../src/app/components/controllers/makeHumanMove'

describe('Human make controller', () => {
  function buildController (mockGame) {
    return new HumanMoveController(mockGame)
  }

  function buildElement () {
    const element = '<div class="spot" id="aSpot" data-index="1"></div>'
    document.body.insertAdjacentHTML('afterbegin', element)
    return document.getElementById('aSpot')
  }

  function buildMockGame () {
    return {
      getBoard: () => { return ['1', '2', '3', '4', '5', '6', '7', '8', '9'] },
      updatePlayerTwoMoves: (move) => {},
      updatePlayerOneMoves: (move) => {},
      updateBoard: (board) => {}
    }
  }

  describe('when a spot is empty', () => {
    it('marks the spot with an X', () => {
      let spotToBeClicked = buildElement()
      let mockGame = buildMockGame()
      let humanMoveController = buildController(mockGame)

      humanMoveController.makeAMove(spotToBeClicked)

      expect(spotToBeClicked).toHaveClass('x')
    })

    it('calls game to update the board', () => {
      let mockGame = buildMockGame()
      let updateBoardAction = spyOn(mockGame, 'updateBoard')
      let spotToBeClicked = buildElement()
      let humanMoveController = buildController(mockGame)

      humanMoveController.makeAMove(spotToBeClicked)

      expect(updateBoardAction).toHaveBeenCalled()
    })

    it('calls game to update player one\'s moves', () => {
      let mockGame = buildMockGame()
      let updatePlayerOneMovesAction = spyOn(mockGame, 'updatePlayerOneMoves')
      let spotToBeClicked = buildElement()
      let humanMoveController = buildController(mockGame)

      humanMoveController.makeAMove(spotToBeClicked)

      expect(updatePlayerOneMovesAction).toHaveBeenCalled()
    })

    it('returns true after making a move', () => {
      let mockGame = buildMockGame()
      let spotToBeClicked = buildElement()
      let humanMoveController = buildController(mockGame)
      let moveMade = humanMoveController.makeAMove(spotToBeClicked)

      expect(moveMade).toBe(true)
    })
  })

  describe('when a spot is occupied', () => {
    it('will not mark the spot', () => {
      let spotToBeClicked = buildElement()
      spotToBeClicked.classList.add('o')
      let mockGame = buildMockGame()
      let humanMoveController = buildController(mockGame)

      humanMoveController.makeAMove(spotToBeClicked)

      expect(spotToBeClicked).toHaveClass('spot')
      expect(spotToBeClicked).toHaveClass('o')
      expect(spotToBeClicked).not.toHaveClass('x')
    })

    it('returns false for move not made', () => {
      let spotToBeClicked = buildElement()
      spotToBeClicked.classList.add('o')
      let mockGame = buildMockGame()
      let humanMoveController = buildController(mockGame)
      let moveMade = humanMoveController.makeAMove(spotToBeClicked)

      expect(moveMade).toBe(false)
    })
  })
})
