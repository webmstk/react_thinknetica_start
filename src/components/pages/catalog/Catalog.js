import React from 'react'
import PropTypes from 'prop-types'
import ProductCard from '~/components/shared/product_card/ProductCard'

const Catalog = ({ products }) => {
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
      {products.map(item => {
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
  products: PropTypes.array.isRequired,
}

export default Catalog
