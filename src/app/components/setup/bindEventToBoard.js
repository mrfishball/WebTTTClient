export function bindEventToBoard (humanMoveController, computerMoveController) {
  const spots = document.querySelectorAll('.spot')
  spots.forEach(spot => spot.addEventListener('click', () => {
    if (humanMoveController.makeAMove(spot)) {
      computerMoveController.makeComputerMove()
    }
  }))
}
