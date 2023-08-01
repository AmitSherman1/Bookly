import React, {useContext} from 'react'
import { AppContext } from '../../context/contextApp'

function CartItem(props) {

    const {data} = props

    const [bookName, bookData] = data

    const bookAmount = bookData.length

    const {img, name, price, _id} = bookData[0]

    let totalPrice = (price + 0.9) * bookAmount

    totalPrice = Math.round(totalPrice * 10) / 10;

    const {setCart} = useContext(AppContext)

    const deleteBookFromDb =  async () => {

      try {
        await fetch(`http://localhost:5000/cartitems/${_id}`, {
          method: "DELETE"
        })
      } catch (error) {
        console.log(error)
      }

    }

    const deleteBook = () => {
      setCart((prev) => (
        prev.filter(book => book._id !== _id)
      ))
      deleteBookFromDb()
    }

  return (
    <div className='cartItemMain'>
    <img className="cartItemImage" src={img} alt="book-img" />
    
    <div className="cartItemDescription">
      <p className="cartItemName">{name}</p>
      <p className="cartItemName">{`x${bookAmount}`}</p>
      <p className="cartItemPrice">{`${totalPrice}0₪`}</p>
    </div>
    <img className="cartItemTrashIcon" src="assets/trash.png" alt="trash" onClick={deleteBook} />
  </div>
  )
}

export default CartItem