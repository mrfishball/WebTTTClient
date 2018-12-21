import { resources } from '../../src/app/components/api/resources'
import Endpoints from '../../src/app/components/api/endpoints'

describe('The make a move endpoint', () => {
  function buildMockGame () {
    return {
      getBoard: () => { return ['1', '2', '3', '4', '5', '6', '7', '8', '9'] },
      updatePlayerTwoMoves: (move) => {},
      updatePlayerOneMoves: (move) => {},
      updateBoard: (board) => {}
    }
  }

  function buildMockPayload () {
    return {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ board: ['1', '2', '3', '4', '5', '6', '7', '8', '9'] })
    }
  }

  it('fetches from the TicTacToeRubyRails API', () => {
    spyOn(window, 'fetch').and.callThrough()

    let endpoints = new Endpoints()
    let mockGame = buildMockGame()
    let mockPayload = buildMockPayload()

    endpoints.getComputerMove(mockGame)

    expect(window.fetch).toHaveBeenCalledWith(resources.generate_move, mockPayload)
  })

  it('returns a promise', () => {
    let endpoints = new Endpoints()
    let mockGame = buildMockGame()
    let response = endpoints.getComputerMove(mockGame)

    expect(response).toEqual(jasmine.any(Promise))
  })
})
