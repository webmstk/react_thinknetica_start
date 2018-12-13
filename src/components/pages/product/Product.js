import React from 'react'
import PropTypes from 'prop-types'
import ProductCard from '~/components/shared/product_card/ProductCard'

const Product = props => {
  return (
    <ProductCard {...props.product} />
  )
}

Product.propTypes = {
  product: PropTypes.shape(ProductCard.propTypes),
}

export default Product
