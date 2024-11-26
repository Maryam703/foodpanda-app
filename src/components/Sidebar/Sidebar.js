import React from 'react';
import "./Sidebar.css"
import { useNavigate } from 'react-router-dom';

export default function Sidebar({isOpen, closeDrawer, currUser}) {
  const navigate = useNavigate()

  const openProductHandlerForShopAdmin = () => {
    navigate(`add-products/${currUser?.shopId}`);
    closeDrawer()
  }

  const openOrderHandlerForShopAdmin = () => {
    navigate(`orders/${currUser?.shopId}`)
    closeDrawer()
  }

  const pickOrderHandlerForRider = () => {
    navigate("all-orders")
    closeDrawer()
  }

  const openRiderOrderHandler = () => {
    navigate("rider-orders")
    closeDrawer()
  }

  const openAboutHandler = () => {
    navigate("/about")
    closeDrawer()
  }

  const userInfoHandler = () => {
    navigate("user-info")
    closeDrawer()
  }

  const logoutHandler = async() => {
    localStorage.removeItem("user")
    // try {
    //   await myAxios.post("/user/logout");
    // } catch (error) {
    //   console.error(error)
    // }
    navigate("/")
  }

  return (
    <div className={isOpen ?'side-bar-container' : 'side-bar-container-close' }>
      <div className='side-bar-close-icon'><i className="fa-solid fa-xmark" onClick={closeDrawer}></i></div>
      <div className='side-bar-container-1'>
        <div className='side-bar-container-1-img-container'>
            <img src='https://mir-s3-cdn-cf.behance.net/projects/404/40ac6899454505.Y3JvcCwxNDAwLDEwOTUsMCwxNTI.png' alt='logo'/>
        </div>
      </div>

      <div className='side-bar-container-2'>
        
      {currUser?.role === "shopadmin" && <div onClick={openProductHandlerForShopAdmin}><i className="fa-solid fa-suitcase"></i> Products</div> }
      {currUser?.role === "shopadmin" && <div onClick={openOrderHandlerForShopAdmin} ><i className="fa-solid fa-cart-flatbed-suitcase"></i> Orders</div> }

      {currUser?.role === "rider" && <div onClick={pickOrderHandlerForRider} ><i className="fa-solid fa-scroll"></i>Pick an order</div> }
      {currUser?.role === "rider" && <div onClick={openRiderOrderHandler} ><i className="fa-solid fa-cart-flatbed-suitcase"></i>Your Orders</div> }
     
       <div onClick={userInfoHandler}><i className="fa-solid fa-user"></i> My Profile</div>
       <div onClick={logoutHandler}><i className="fa-solid fa-right-from-bracket"></i> Logout</div>
        <div onClick={openAboutHandler} ><i className="fa-solid fa-book-open-reader"></i> About</div> 
      </div>
    </div>
  )
}
