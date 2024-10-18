import React from 'react';
import "./Sidebar.css"
import { useNavigate } from 'react-router-dom';

export default function Sidebar({isOpen, closeDrawer}) {
  const navigate = useNavigate()

  const openProductHandler = () => {
    navigate("add-products");
    closeDrawer()
  }

  const openOrderHandler = () => {
    navigate("orders")
    closeDrawer()
  }

  const openAboutHandler = () => {
    navigate("/about")
    closeDrawer()
  }

  return (
    <div className={isOpen ?'side-bar-container' : 'side-bar-container-close' }>
      <div className='side-bar-close-icon'><i className="fa-solid fa-xmark" onClick={closeDrawer}></i></div>
      <div className='side-bar-container-1'>
        <div className='side-bar-container-1-img-container'>
            <img src='https://www.khaosod.co.th/wpapp/uploads/2020/10/foodpanda-logo.png' alt=''/>
        </div>
      </div>

      <div className='side-bar-container-2'>
        <div onClick={openProductHandler}>• Products</div>
        <div onClick={openOrderHandler} >• Orders</div>
        <div onClick={openAboutHandler} >• About</div>
      </div>
    </div>
  )
}
