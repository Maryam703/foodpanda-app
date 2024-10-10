import React from 'react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()

  const signUpHandler = () => {
    navigate("/signUp")
  }
  return (
    <div className="header">
      <i className="bag-icon fa-solid fa-cart-flatbed-suitcase"></i>
      Do you need an account?
      <button className='header-btn' onClick={signUpHandler}>SIGN UP NOW</button>
    </div>
  )
}
