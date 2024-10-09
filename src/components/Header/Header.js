import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <div className="header">
      <i className="bag-icon fa-solid fa-cart-flatbed-suitcase"></i>
      Do you need an account?
      <button className='header-btn'>SIGN UP NOW</button>
    </div>
  )
}
