export default class Game {
  constructor (board) {
    this.board = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    this.playerOneMoves = []
    this.playerTwoMoves = []
  }

  getBoard () {
    return this.board
  }

  getPlayerOneMoves () {
    return this.playerOneMoves
  }

  getPlayerTwoMoves () {
    return this.playerTwoMoves
  }

  updateBoard (board) {
    this.board = board
  }

  updatePlayerOneMoves (move) {
    this.playerOneMoves.push(move)
  }

  updatePlayerTwoMoves (move) {
    this.playerTwoMoves.push(move)
  }
}
