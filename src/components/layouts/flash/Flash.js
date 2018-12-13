import React from 'react'
import PropTypes from 'prop-types'

const Flash = ({ message, type }) => {
  if (!message) {
    return null
  }

  return (
    <div className={type} style={{ margin: '20px 0', padding: '10px', border: '1px solid #999' }}>
      {message}
    </div>
  )
}

Flash.propTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(['info', 'error']),
}

export default Flash
