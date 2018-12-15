import React, { Component } from 'react'
import { BasketConsumer } from '~/contexts/BasketContext'
import Basket from '~/components/pages/basket/Basket'
import Products from '~/constants/Products'

class CatalogPage extends Component {
  basketProducts (basket) {
    const ids = Object.keys(basket).map(el => Number(el))

    return Products.filter(el => ids.includes(el.id))
  }

  mergeQuantity (basket, products) {
    return products.reduce((acc, el) => {
      const item = {
        product: el,
        quantity: basket[el.id],
      }

      acc[el.id] = item

      return acc
    }, {})
  }

  render () {
    return (
      <BasketConsumer>
        {
          ({ basket }) => {
            const products = this.basketProducts(basket)
            const productsWithQuantity = this.mergeQuantity(basket, products)

            return (
              <Basket products={productsWithQuantity} />
            )
          }
        }
      </BasketConsumer>
    )
  }
}

export default CatalogPage
