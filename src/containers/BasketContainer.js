import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BasketProvider } from '~/contexts/BasketContext'

class BasketContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      basket: {}, // { [itemId]: itemQuantity, ... }
    }
  }

  addToBasket (id, quantity = 1) {
    const { basket } = this.state
    const total = basket[id] ? basket[id] + quantity : quantity

    this.setState({
      basket: {
        ...basket,
        [id]: total,
      },
    })
  }

  render () {
    const basketContext = {
      basket: this.state.basket,
      addToBasket: this.addToBasket.bind(this),
    }

    return (
      <BasketProvider value={basketContext}>
        {this.props.children}
      </BasketProvider>
    )
  }
}

BasketContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BasketContainer
