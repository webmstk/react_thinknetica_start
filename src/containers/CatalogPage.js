import React, { Component } from 'react'
import Catalog from '~/components/pages/catalog/Catalog'
import Basket from '~/components/pages/catalog/Basket/basket'
import Products from '~/constants/Products'

class CatalogPage extends Component {
  render () {
    return (
      <div>
        <Basket />
        <Catalog products={Products} />
      </div>
    )
  }
}

export default CatalogPage
