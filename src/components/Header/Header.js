import React, { useEffect, useState } from 'react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState(null);

  let user;
  useEffect(() => {
    user = JSON.parse(localStorage.getItem("user"))
    setCurrentUser(user)

  }, [user])

  const signUpHandler = () => {
    navigate("/signUp")
  }

  const goToCartHandler = () => {
    navigate("/cart")
  }

  return (
    <>
      {
        currentUser !== null ?
          <div className='auth-header'>
            <div className='auth-header-left-side'>
              <i className="header-icon fa-solid fa-location-dot" />
              <div>
                <div className='auth-header-user-adress'>{user.adress}</div>
                <div className='auth-header-user-city'>{user.city}</div>
              </div>
            </div>
            <i className="auth-header-right-side header-icon fa-solid fa-basket-shopping" onClick={goToCartHandler}></i>
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
