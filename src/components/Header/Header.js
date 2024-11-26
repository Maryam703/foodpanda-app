import React, { useEffect, useState } from 'react'
import "./Header.css";
import myAxios from '../../MyAxios';
import { useNavigate } from 'react-router-dom'
import ApiLoader from '../../ApiLoader/ApiLoader'

export default function Header() {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([])
  const [currUser, setCurrUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [reload, setReload] = useState(false)

  useEffect(() => {
    const fetchingData = async() => {
      try {
        setLoading(true)
        let res = await myAxios.get("/user/get-user");
        let { user } = res.data;
        setCurrUser(user)
      } catch (error) {
        setCurrUser(null)
      }
      setLoading(false)
      setReload(false)
    }

    fetchingData()
  }, [reload])

  useEffect(() => {
    let products = JSON.parse(localStorage.getItem("products"))
    setCartItems(products)
    setReload(false)
  }, [reload])

  const signUpHandler = () => {
    navigate("/signUp")
  }

  const loginHandler = () => {
    navigate("/login")
  }

  const signUpBuisnessHandler = () => {
    navigate("/signup-shop")
  }

  const signupRiderHandler = () => {
    navigate("/signup-rider")
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

  const logoutHandler = async () => {
    localStorage.removeItem("user")
    // try {
    //   await myAxios.post("/user/logout");
    // } catch (error) {
    //   console.error(error)
    // }
    navigate("/")
    setReload(true)
  }


  return (
    <>
      {loading && <ApiLoader />}
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
              <div>{cartItems && cartItems.length > 0 && cartItems.length}</div>
              <i className="header-icon fa-solid fa-clock" onClick={trackigOrderHandler}></i>
              <button className="header-logout-btn" onClick={logoutHandler}>LogOut</button>
            </div>
          </div>
          :
          <div>
            <div className='header'>
              <i className="header-icon fa-solid fa-cart-flatbed-suitcase"></i>
              Do you need an account?
              <button className='header-btn' onClick={signUpHandler}>SIGN UP NOW</button>
              <button className='header-btn' onClick={loginHandler}>LOGIN</button>
            </div>

            <div className='header-2'>
              Do you need a buisness account?
              <button className='header-2-btn' onClick={signUpBuisnessHandler}>SIGN UP BUISNESS</button>
              <button className='header-2-btn' onClick={signupRiderHandler}>SIGN UP RIDER</button>
            </div>
          </div>
      }
    </>
  )
}
