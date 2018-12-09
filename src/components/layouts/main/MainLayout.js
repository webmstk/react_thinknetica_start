import React from 'react'
import PropTypes from 'prop-types'
import NavBar from './nav_bar/NavBar'

const MainLayout = props => {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <main>
        {props.children}
      </main>
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.any,
}

export default MainLayout
