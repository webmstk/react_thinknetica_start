import React from 'react'
import PropTypes from 'prop-types'
import ProductCard from './product_card/ProductCard'

const Catalog = ({ items }) => {
  const styles = {
    wrap: {
      border: '1px solid #999',
      padding: '5px',
      margin: '20px 0',
      cursor: 'pointer',
    },
  }

  return (
    <div>
      {items.map(item => {
        return (
          <div key={item.id} style={styles.wrap}>
            <ProductCard {...item} />
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
