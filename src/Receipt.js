export default class Receipt {
  constructor () {
    this.positions = []
  }

  add (position) {
    if (!this._isValid(position)) {
      return false
    }

    this.positions = [...this.positions, position]
    return true
  }

  remove (positionIndex) {
    if (!this.positions[positionIndex]) {
      return false
    }

    this.positions = this.positions.filter((_el, i) => i !== positionIndex)
    return true
  }

  positions () {
    return this.positions
  }

  total () {
    return this.positions.reduce((acc, el) => (
      acc + el.price * el.quantity
    ), 0)
  }

  _isValid ({ name, price, quantity }) {
    return typeof name === 'string'
      && name.trim() != ''
      && typeof price === 'number'
      && typeof quantity === 'number'
      && quantity > 0
  }
}
