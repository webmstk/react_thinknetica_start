import React, { Component } from 'react'
import Catalog from '~/src/components/Catalog'
import Products from '~/src/constants/Products'

class CatalogPage extends Component {
  render () {
    return <Catalog items={Products} />
  }
}

export default CatalogPage
