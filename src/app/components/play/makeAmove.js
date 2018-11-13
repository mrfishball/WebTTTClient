export function makeAMove () {
  if (this.classList[0] === 'spot' && this.classList['length'] === 1) {
    this.classList.add('x')
  }
}
