import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Image from './image/Image'
import TextBox from './text_box/TextBox'
import Price from './price/Price'
import AddToBasket from './add_to_basket/AddToBasket'
import { productPath } from '~/helpers/routes'

const ProductCard = ({ id, title, ...props }) => {
  const onDragStart = e => {
    const data = { id, quantity: 1 } // пусть DnD пока будет добавлять 1 товар
    e.dataTransfer.setData('text/plain', JSON.stringify(data))
  }

  return (
    <div draggable onDragStart={onDragStart}>
      <Image src={props.imageUrl} alt={title} width={263} height={263} />

      <br /><br />

      <Link to={productPath(id)}>
        <TextBox>{title}</TextBox>
      </Link>

      {' - '}<Price price={props.price} />

      <br /><br />

      <AddToBasket id={id} />
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
