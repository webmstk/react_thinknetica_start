import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from '~/routes'
import MainLayout from '~/components/layouts/main/MainLayout'
import BasketContainer from '~/containers/BasketContainer'

const routeWithSubroutes = (route, key) => {
  return <Route key={key} {...route} />
}

ReactDOM.render(
  <Router>
    <MainLayout>
      <BasketContainer>
        <Switch>
          {routes.map((route, key) => routeWithSubroutes(route, key))}
        </Switch>
      </BasketContainer>
    </MainLayout>
  </Router>,
  document.getElementById('root')
)
