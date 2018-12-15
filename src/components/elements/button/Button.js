import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>{children}</button>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onClick: PropTypes.func,
}

export default Button
