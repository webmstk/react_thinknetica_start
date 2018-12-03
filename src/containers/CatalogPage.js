import React, { Component } from 'react'
import Catalog from '~/components/pages/catalog/Catalog'
import Basket from '~/components/pages/catalog/Basket/basket'
import Products from '~/constants/Products'
import { BasketProvider } from '~/contexts/BasketContext'

class CatalogPage extends Component {
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
        <Basket />
        <Catalog items={Products} />
      </BasketProvider>
    )
  }
}

export default CatalogPage
