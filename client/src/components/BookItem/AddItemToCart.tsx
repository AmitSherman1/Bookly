import React from 'react'
import './bookItem.css'

function AddItemToCart(props) {

    const {onClick} = props

  return (
    <div className="bookItemAddToCart" onClick={() => onClick()}>
        <p className="bookItemAddToCartText">Add To Cart</p>
        <img className="bookItemAddToCartIcon" src="assets/cart.png" alt="cart" />
    </div>
  )
}

export default AddItemToCart