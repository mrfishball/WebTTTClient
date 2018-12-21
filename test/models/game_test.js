import Game from '../../src/app/components/models/game'

describe('The game', () => {
  it('updates the player\'s moves', () => {
    let game = new Game()
    let move = 2

    game.updatePlayerOneMoves(move)
    expect(game.getPlayerOneMoves()).toEqual([2])
  })

  it('updates the computer\'s moves', () => {
    let game = new Game()
    let move = 1

    game.updatePlayerTwoMoves(move)
    expect(game.getPlayerTwoMoves()).toEqual([1])
  })
})
