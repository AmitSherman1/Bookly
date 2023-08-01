import React, {useContext, useEffect} from 'react'
import './popUpMessage.css'
import { AppContext } from '../../context/contextApp'

function PopUpMessage() {

    const {popupMessage, setPopupMessage} = useContext(AppContext)

    useEffect(() => {
        const timer = setTimeout(() => {
            setPopupMessage("")
        }, 2000);
        return () => clearTimeout(timer);
      }, [popupMessage]);

    if(popupMessage === ""){
        return null
    }

  return (
    <div className='popupMessageMain'>
        <p className='popupMessageText'>Added {popupMessage} To Cart</p>
    </div>
  )
}

export default PopUpMessage