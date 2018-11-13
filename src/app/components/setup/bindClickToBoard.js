import { makeAMove } from '../play/makeAmove'

export function bindClickToBoard () {
  const spots = document.querySelectorAll('.spot')
  spots.forEach(spot => spot.addEventListener('click', makeAMove))
}
