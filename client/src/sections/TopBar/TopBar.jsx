import React from 'react'
import './topBar.css'
import Cart from '../../components/Cart/Cart'

function TopBar() {

  return (
    <div className='topBarSection'>
        <img className='logoIcon' src='assets/logo.png' alt='logo' />
        <Cart />
    </div>
  )
}

export default TopBar