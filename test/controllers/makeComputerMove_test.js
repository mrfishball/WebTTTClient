import ComputerMoveController from '../../src/app/components/controllers/makeComputerMove'

describe('Computer move controller', () => {
  function buildMockEndpoints () {
    return {
      getComputerMove: () => {}
    }
  }

  function buildController (mockGame, mockEndpoints) {
    return new ComputerMoveController(mockGame, mockEndpoints)
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

  it('calls the getComputerMove endpoint', () => {
    let mockEndpoints = buildMockEndpoints()
    spyOn(mockEndpoints, 'getComputerMove').and.returnValue(Promise.resolve({ move: '1' }))

    let mockGame = buildMockGame()
    let computerMoveController = buildController(mockGame, mockEndpoints)

    buildElement()
    computerMoveController.makeComputerMove()

    expect(mockEndpoints.getComputerMove).toHaveBeenCalled()
  })

  it('returns extracted data in an array', () => {
    let mockGame = buildMockGame()
    let mockEndpoints = buildMockEndpoints()
    let computerMoveController = buildController(mockGame, mockEndpoints)

    let data = { move: '1', board: ['1', '2', '3'] }
    let extractData = computerMoveController.extractData(data)

    expect(extractData).toEqual(['1', ['1', '2', '3']])
  })

  it('calls the game to updates the board', () => {
    let mockGame = buildMockGame()
    let mockEndpoints = buildMockEndpoints()
    let computerMoveController = buildController(mockGame, mockEndpoints)

    let updateBoardAction = spyOn(mockGame, 'updateBoard')
    let data = [ '1', ['1', '2', '3'] ]

    computerMoveController.updateGame(data)

    expect(updateBoardAction).toHaveBeenCalledWith(data[1])
  })

  it('calls the game to updates the computer\'s moves', () => {
    let mockGame = buildMockGame()
    let mockEndpoints = buildMockEndpoints()
    let computerMoveController = buildController(mockGame, mockEndpoints)

    let updateMovesAction = spyOn(mockGame, 'updatePlayerTwoMoves')
    let data = [ '1', ['1', '2', '3'] ]

    computerMoveController.updateGame(data)

    expect(updateMovesAction).toHaveBeenCalledWith(data[0])
  })

  it('marks a spot with an O', () => {
    let mockGame = buildMockGame()
    let mockEndpoints = buildMockEndpoints()
    let computerMoveController = buildController(mockGame, mockEndpoints)

    let move = '1'
    let spotToBeMarked = buildElement()

    computerMoveController.renderMove(move)

    expect(spotToBeMarked).toHaveClass('o')
  })
})
