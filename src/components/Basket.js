import React from 'react'
import Button from '~/src/elements/Button'
import { BasketConsumer } from '~/src/contexts/BasketContext'

const Basket = () => {
  const countBasketItems = basket => (
    Object.keys(basket).reduce((acc, id) => (acc += basket[id]), 0)
  )

  const renderBasket = quantity => {
    if (quantity === 0) {
      return <div>Корзина пуста</div>
    }

    return (
      <div>
        <div>Товаров в корзине: {quantity}</div>
        <div><Button value='В корзину' onClick={() => console.log('not implemented')} /></div>
      </div>
    )
  }

  return (
    <div style={{ border: '1px solid #999', padding: '20px' }}>
      <BasketConsumer>
        {
          ({ basket }) => {
            const quantity = countBasketItems(basket)
            return renderBasket(quantity)
          }
        }
      </BasketConsumer>
    </div>
  )
}

export default Basket
