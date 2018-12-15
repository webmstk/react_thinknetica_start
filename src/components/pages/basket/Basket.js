import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { catalogPath } from '~/helpers/routes'

const Basket = ({ products, ...props }) => {
  if (Object.keys(products).length === 0) {
    const flash = {
      message: 'В корзине ничего нет. Сначала добавьте товары',
      type: 'info',
    }

    props.history.push(catalogPath(), { flash })
  }

  return (
    <table>
      <tbody>
        {Object.entries(products).map(([key, obj]) => {
          const { product, quantity } = obj

          return (
            <tr key={key}>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{quantity}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

Basket.propTypes = {
  products: PropTypes.shape({
    product: PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
    }),
    quantity: PropTypes.number,
  }),
  history: PropTypes.object,
}

export default withRouter(Basket)
