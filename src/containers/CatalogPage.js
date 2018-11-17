import React, { Component } from 'react'
import Catalog from '~/src/components/Catalog'
import Products from '~/src/constants/Products'
import Basket from '~/src/components/Basket'
import { BasketProvider } from '~/src/contexts/BasketContext'

class CatalogPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      basket: {}, // { [itemId]: itemQuantity, ... }
    }
  }

  addToBasket (id) {
    const { basket } = this.state
    const quantity = basket[id] ? basket[id] + 1 : 1

    this.setState({
      basket: {
        ...basket,
        [id]: quantity,
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
        <Basket />
        <Catalog items={Products} />
      </BasketProvider>
    )
  }
}

export default CatalogPage
