import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import NavBar from './nav_bar/NavBar'
import Flash from '~/components/layouts/flash/Flash'

const MainLayout = props => {
  let flash

  if (props.location.state && props.location.state.flash) {
    flash = props.location.state.flash
    // delete props.location.state.flash
  }

  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <main>
        <Flash {...flash} />
        {props.children}
      </main>
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.any,
}

export default withRouter(MainLayout)
