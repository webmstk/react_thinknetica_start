import React from 'react'
import PropTypes from 'prop-types'
import Image from './product_card/Image'
import TextBox from './product_card/TextBox'
import Price from './product_card/Price'
import AddToBasket from './product_card/AddToBasket'

const ProductCard = ({ title, ...props }) => {
  return (
    <div>
      <Image src={props.imageUrl} alt={title} width={263} height={263} />

      <br /><br />

      <TextBox>{title}</TextBox>

      {' - '}<Price price={props.price} />

      <br /><br />

      <AddToBasket id={props.id} />
    </div>
  )
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
}

export default ProductCard
