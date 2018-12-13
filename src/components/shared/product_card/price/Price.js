import React from 'react'
import PropTypes from 'prop-types'

const Price = ({ price }) => <span>{price} руб.</span>

Price.propTypes = {
  price: PropTypes.number.isRequired,
}

export default Price
