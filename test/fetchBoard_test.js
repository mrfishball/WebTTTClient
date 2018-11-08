import { fetchBoard } from '../src/app/fetchBoard'
import { endpoints } from '../src/app/endpoints'

describe('fetchBoard', () => {
  it('fetches from the TicTacToeRubyRails API', () => {
    spyOn(window, 'fetch').and.callThrough()
    fetchBoard()

    expect(window.fetch).toHaveBeenCalledWith(endpoints.game_board)
  })

  it('returns a Promise', () => {
    const response = fetchBoard()

    expect(response).toEqual(jasmine.any(Promise))
  })
})
