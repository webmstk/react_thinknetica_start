import React from 'react'
import { NavLink } from 'react-router-dom'
import * as routes from '~/helpers/routes'

const NavBar = props => {
  return (
    <ul>
      <li>
        <NavLink exact to={routes.rootPath()}>Каталог</NavLink>
      </li>
      <li>
        <NavLink exact to={routes.basketPath()}>Корзина</NavLink>
      </li>
      <li>
        <NavLink exact to={routes.contactsPath()}>Контакты</NavLink>
      </li>
    </ul>
  )
}

export default NavBar
