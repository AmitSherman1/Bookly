import React, {useState, useContext} from 'react'
import './bookItem.css'
import AddItemToCart from './AddItemToCart.tsx'
import { AppContext } from '../../context/contextApp'

function BookItem(props) {

  const {data} = props

  const {img, name, price} = data

  const {setPopupMessage} = useContext(AppContext)

  const [isHover, setIsHover] = useState(false)

  const params = {
    mouseEvents: {
      onMouseOver: () => setIsHover(true),
      onMouseOut: () => setIsHover(false)
    }
  }

  const addItemToCartDb = async () => {

    try {
      await fetch("http://localhost:5000/cartitems", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
    } catch (error) {
      console.log(error)
    }

  }

  const addItemToCartHandler = async () => {
    setPopupMessage(name)
    data["_id"] = `${Math.floor(Math.random() * 1000000)}`
    await addItemToCartDb()
  }

  return (
    <div className='bookItemMain' {...params.mouseEvents}>

      {isHover &&
      <AddItemToCart onClick={addItemToCartHandler} />
      }
      <img className="bookItemImage" src={img} alt="book-img" />
      
      <div className="bookItemDescription">
        <p className="bookItemName">{name}</p>
        <p className="bookItemPrice">{`${price}.90₪`}</p>
      </div>
    </div>
  )
}

export default BookItem