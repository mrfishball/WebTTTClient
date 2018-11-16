import { resources } from './resources'
import { validateResponse, readResponseAsJSON } from './helpers'

export default class Endpoints {
  getComputerMove (game) {
    return window.fetch(resources.generate_move, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ board: game.getBoard() })
    })
      .then(validateResponse)
      .then(readResponseAsJSON)
  }
}
