export default class MakeHumanMove {
  constructor (game) {
    this.game = game
  }

  makeAMove (spot) {
    if (spot.classList[0] === 'spot' && spot.classList['length'] === 1) {
      let move = spot.dataset.index
      this.game.updatePlayerOneMoves(move)
      this.updateBoard(move)
      this.renderMove(spot)
      return true
    }
    return false
  }

  updateBoard (move) {
    let board = this.game.getBoard()
    let index = board.indexOf(move)
    board.splice(index, 1)
    this.game.updateBoard(board)
  }

  renderMove (spot) {
    spot.classList.add('x')
  }
}
