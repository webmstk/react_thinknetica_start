/* eslint-disable react/prop-types, react/display-name */
import React from 'react'
import ProductPage from '~/containers/ProductPage'
import { productPath } from '~/helpers/routes'

export default {
  path: productPath(),
  render: ({ match }) => <ProductPage id={Number(match.params.id)} />,
}
