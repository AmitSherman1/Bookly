import React, {useContext, useEffect} from 'react'
import './cartBar.css'
import { AppContext } from '../../context/contextApp'
import CartItem from './CartItem.tsx'

function CartBar() {

  const {isCartBarOpen, cart, setCart} = useContext(AppContext)

  useEffect(() => {
    fetch("http://localhost:5000/cartitems")
    .then((res) => res.json())
    .then((data) => setCart([...data]))
    .catch((error) => console.log(error))
  }, [isCartBarOpen]);

  if(!isCartBarOpen){
    return null
  }

  const sortedCart = cart?.reduce((r, a) => {
    r[a.name] = r[a.name] || []
    r[a.name].push(a)
    return r
  }, Object.create(null))

  const sortedCartArr = Object.entries(sortedCart)

  const cartArrSortedByName = sortedCartArr.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    }
    if (a[0] > b[0]) {
      return 1;
    }
    return 0;
  })

  let totalPrice = 0

  for(const item in sortedCart){

    const itemAmount = sortedCart[item].length
    const price = (sortedCart[item][0].price + 0.9) * itemAmount

    totalPrice += price
  }

  totalPrice = Math.round(totalPrice * 10) / 10;

  return (
    <div className='cartBarSection'>
      <div className='cartBarMain'>
        <div className='cartBookContainer'>
          {
            cartArrSortedByName.map((book, index) => {
              return <CartItem key={index} data={book} />
            })
          }
        </div>
        <p className='cartBarTotalPrice'>total price: {totalPrice}0$</p>
      </div>
    </div>
  )
}

export default CartBar