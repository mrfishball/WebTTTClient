import { errorAlert } from '../api/helpers'

export default class ComputerMoveController {
  constructor (game, endpoints) {
    this.game = game
    this.endpoints = endpoints
  }

  makeComputerMove () {
    let board = this.game.getBoard()

    if (!this.boardFull(board)) {
      this.endpoints.getComputerMove(this.game)
        .then((data) => {
          let result = this.extractData(data)
          this.updateGame(result)
          this.renderMove(result[0])
        })
        .catch(errorAlert)
    }
  }

  updateGame (data) {
    this.game.updatePlayerTwoMoves(data[0])
    this.game.updateBoard(data[1])
  }

  extractData (data) {
    let move = data.move
    let updatedBoard = data.board
    return [move, updatedBoard]
  }

  renderMove (move) {
    let spot = document.querySelector(`[data-index="${move}"]`)
    spot.classList.add('o')
  }

  boardFull (board) {
    return board.length === 0
  }
}
