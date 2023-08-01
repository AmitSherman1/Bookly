import React, { useContext } from 'react'
import './cart.css'
import { AppContext } from '../../context/contextApp'

function Cart() {

  const {setIsCartBarOpen} = useContext(AppContext)
  
  const params = {
    img: {
      className:'cartIcon',
      src:"assets/cart.png",
      onClick: () => setIsCartBarOpen((prev) => !prev)
    }
  }

  return (
    <div>
        <img {...params.img} alt='cart' />
    </div>
  )
}

export default Cart