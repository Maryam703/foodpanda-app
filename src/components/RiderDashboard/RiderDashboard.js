import React, { useEffect, useState } from 'react'
import "./RiderDashboard.css"
import Sidebar from '../Sidebar/Sidebar'
import { useOutlet } from 'react-router-dom'
import MyAxios from "../../MyAxios.js"

export default function RiderDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [currUser, setCurrUser] = useState(null)
  const outlet = useOutlet()

  useEffect(() => {
    let fetchingData = async() => {
      let res = await MyAxios.get("/user/get-user")
      let { user } = res.data;
      setCurrUser(user)
    }
    fetchingData()
  }, [])

  const openDrawer = () => {
    console.log("true")
    setIsOpen(true)
  }

  const closeDrawer = () => {
    console.log("false")
    setIsOpen(false)
  }

  return (
    <div className='rider-dashboard-container'>
       <div className='rider-dashboard-icon-container'>
        <i className="fa-solid fa-bars" onClick={openDrawer}></i>
      </div>

      <Sidebar isOpen={isOpen} closeDrawer={closeDrawer} currUser={currUser}/>
  
      <div className='rider-dashboard-details-container'>
      {outlet || <p>Hey {currUser?.name}! Welcome to the foodpanda!</p>}
      </div>
    </div>
  )
}
