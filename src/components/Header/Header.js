import React, { useEffect, useState } from 'react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'

export default function Header({ currUser }) {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    let products = JSON.parse(localStorage.getItem("products"))
    setCartItems(products)
  }, [])

  const signUpHandler = () => {
    navigate("/signUp")
  }

  const goToCartHandler = () => {
    navigate("/cart")
  }

  const userInfoHandler = () => {
    navigate("/user-info")
  }

  const trackigOrderHandler = () => {
    navigate("/track-order")
  }
  return (
    <>
      {
        currUser !== null ?
          <div className='auth-header'>
            <div className='auth-header-left-side' onClick={userInfoHandler}>
              <i className="header-icon fa-solid fa-location-dot" />
              <div>
                <div className='auth-header-user-adress'>{currUser?.adress}</div>
                <div className='auth-header-user-city'>{currUser?.city}</div>
              </div>
            </div>
            <div className='auth-header-right-side'>
              <i className="header-icon fa-solid fa-basket-shopping" onClick={goToCartHandler}></i>
              <div>{cartItems.length > 0 && cartItems.length}</div>
              <i className="header-icon fa-solid fa-clock" onClick={trackigOrderHandler}></i>
            </div>
          </div>
          :
          <div className='header'>
            <i className="header-icon fa-solid fa-cart-flatbed-suitcase"></i>
            Do you need an account?
            <button className='header-btn' onClick={signUpHandler}>SIGN UP NOW</button>
          </div>
      }
    </>
  )
}
