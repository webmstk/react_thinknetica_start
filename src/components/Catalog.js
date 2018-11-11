import React from 'react'
import PropTypes from 'prop-types'
import ProductCard from './catalog/ProductCard'

const Catalog = ({ items }) => {
  return (
    <div>
      {items.map(item => {
        return (
          <div key={item.id}>
            <ProductCard {...item} />
            <br /><br />
          </div>
        )
      })}
    </div>
  )
}

Catalog.propTypes = {
  items: PropTypes.array.isRequired,
}

export default Catalog
