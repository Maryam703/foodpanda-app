import React, { useState } from 'react'
import "./ShopkeeperDashboard.css"
import Sidebar from '../Sidebar/Sidebar'
import { useOutlet } from 'react-router-dom'

export default function ShopkeeperDashboard() {
  const [isOpen, setIsOpen] = useState(false)
  const outlet = useOutlet()

  const openDrawer = () => {
    console.log("true")
    setIsOpen(true)
  }

  const closeDrawer = () => {
    console.log("false")
    setIsOpen(false)
  }

  return (
    <div className='shopkeeper-dashboard-container'>
      <Sidebar isOpen={isOpen} closeDrawer={closeDrawer}/>
      <div className='shopkeeper-dashboard-icon-container'>
        <i className="fa-solid fa-bars" onClick={openDrawer}></i>
      </div>

      <div className='shopkeeper-dashboard-details-container'>
      {outlet || <p>Welcome to the foodpanda!</p>}
      </div>
    </div>
  )
}
