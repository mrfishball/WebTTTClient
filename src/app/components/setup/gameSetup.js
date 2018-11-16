import { bindEventToBoard } from './bindEventToBoard'
import Game from '../models/game'
import MakeHumanMove from '../controllers/makeHumanMove'
import ComputerMoveController from '../controllers/makeComputerMove'
import Endpoints from '../api/endpoints'

export function gameSetup () {
  const game = new Game()
  const endpoints = new Endpoints()
  const computerMoveController = new ComputerMoveController(game, endpoints)
  const humanMoveController = new MakeHumanMove(game)

  bindEventToBoard(humanMoveController, computerMoveController)
}
