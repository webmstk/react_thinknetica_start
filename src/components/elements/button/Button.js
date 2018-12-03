import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ value, onClick }) => {
  return (
    <button onClick={onClick}>{value}</button>
  )
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default Button
