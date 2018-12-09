import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from '~/components/elements/input/Input'
import Button from '~/components/elements/button/Button'
import { BasketConsumer } from '~/contexts/BasketContext'

class AddToBasket extends Component {
  constructor (props) {
    super(props)

    this.state = {
      quantity: 1,
    }

    this.onChange = this.onChange.bind(this)
    this.onBlur = this.onBlur.bind(this)
    this.onFocus = this.onFocus.bind(this)
  }

  onChange (e) {
    const { value } = e.target

    if (value === '0' || /\D/.test(value)) {
      e.preventDefault()
    } else {
      this.setState({ quantity: value ? Number(value) : '' })
    }
  }

  onBlur (e) {
    const { value } = e.target

    if (value === '') {
      this.setState({ quantity: 1 })
    }
  }

  onFocus (e) {
    this.setState({ quantity: '' })
  }

  onBasketAdd (id, addToBasket) {
    addToBasket(id, this.state.quantity)
    this.setState({ quantity: 1 })
  }

  render () {
    return (
      <div>
        <Input
          value={this.state.quantity}
          onChange={this.onChange}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
        />

        <BasketConsumer>
          {
            ({ addToBasket }) => (
              <Button
                value='добавить в корзину'
                onClick={() => this.onBasketAdd(this.props.id, addToBasket)}
              />
            )
          }
        </BasketConsumer>
      </div>
    )
  }
}

AddToBasket.propTypes = {
  id: PropTypes.number.isRequired,
}

export default AddToBasket
