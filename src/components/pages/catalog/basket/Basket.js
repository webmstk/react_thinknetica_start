import React from 'react'
import { Link } from 'react-router-dom'
import { basketPath } from '~/helpers/routes'
import Button from '~/components/elements/button/Button'
import { BasketConsumer } from '~/contexts/BasketContext'

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
        <Button>
          <Link to={basketPath()} style={{ textDecoration: 'none', color: 'black' }}>В корзину</Link>
        </Button>
      </div>
    )
  }

  const onDrop = (e, addToBasket) => {
    e.preventDefault()
    const { id, quantity } = JSON.parse(e.dataTransfer.getData('text'))

    addToBasket(id, quantity)
  }

  return (
    <BasketConsumer>
      {
        ({ basket, addToBasket }) => {
          const quantity = countBasketItems(basket)
          return (
            <div
              style={{ border: '1px solid #999', padding: '20px' }}
              onDragOver={e => e.preventDefault()}
              onDrop={e => onDrop(e, addToBasket)}
            >
              {renderBasket(quantity)}
            </div>
          )
        }
      }
    </BasketConsumer>
  )
}

export default Basket
