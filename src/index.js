import React from 'react'
import ReactDOM from 'react-dom'
import MainLayout from '~/components/layouts/main/MainLayout'
import CatalogPage from '~/containers/CatalogPage'

ReactDOM.render(
  <MainLayout>
    <CatalogPage />
  </MainLayout>,
  document.getElementById('root')
)
