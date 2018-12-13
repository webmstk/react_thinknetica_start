import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Basket from '~/components/pages/catalog/Basket/basket'
import Product from '~/components/pages/product/Product'
import Products from '~/constants/Products'

class ProductPage extends Component {
  render () {
    const product = Products.find(el => el.id === this.props.id)

    return (
      <div>
        <Basket />
        <Product product={product} />
      </div>
    )
  }
}

ProductPage.propTypes = {
  id: PropTypes.number.isRequired,
}

export default ProductPage
