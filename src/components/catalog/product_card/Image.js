import React from 'react'
import PropTypes from 'prop-types'

const Image = ({ src, width, height, alt }) => (
  // у меня нет ни малейшего понятия, как подгрузить изображение в рантайме
  <img src={src} width={width} height={height} alt={alt} />
)

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string,
}

export default Image
