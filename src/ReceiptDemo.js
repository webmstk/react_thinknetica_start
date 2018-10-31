import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Receipt from '~/src/Receipt'

class ReceiptDemo extends Component {
  renderPosition ({ name, quantity, price }, key) {
    return (
      <tr key={key}>
        <td>{name}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td>{price * quantity}</td>
      </tr>
    )
  }

  render () {
    const receipt = new Receipt()

    this.props.positions.forEach(el => receipt.add(el))

    return (
      <div>
        <h3>Чек</h3>

        <table>
          <thead>
            <tr>
              <th>Наименование</th>
              <th>Количество</th>
              <th>Цена</th>
              <th>Сумма</th>
            </tr>
          </thead>

          <tbody>
            {receipt.positions.map((el, i) => this.renderPosition(el, i))}

            <tr>
              <th colSpan='3'>Итого</th>
              <th>{receipt.total()}</th>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

ReceiptDemo.propTypes = {
  positions: PropTypes.array.isRequired,
}

export default ReceiptDemo
