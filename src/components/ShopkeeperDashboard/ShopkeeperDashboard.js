import React, { useEffect, useState } from 'react'
import "./ShopkeeperDashboard.css"
import Sidebar from '../Sidebar/Sidebar'
import { useOutlet } from 'react-router-dom'
import MyAxios from "../../MyAxios.js"
import ApiLoader from '../../ApiLoader/ApiLoader.js'

export default function ShopkeeperDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [currUser, setCurrUser] = useState(null);
  const [loading, setLoading] = useState(false)
  const outlet = useOutlet()

  useEffect(() => {
    let fetchingData = async() => {
      try {
        setLoading(true)
        let res = await MyAxios.get("/user/get-user")
        let { user } = res.data;
        setCurrUser(user)
      } catch (error) {
        console.error(error)
      }
      setLoading(false)
    }
    fetchingData()
  }, [])

  const openDrawer = () => {
    setIsOpen(true)
  }

  const closeDrawer = () => {
    setIsOpen(false)
  }

  return (
    <>
    {loading && <ApiLoader/>}
    <div className='shopkeeper-dashboard-container'>
       <div className='shopkeeper-dashboard-icon-container'>
        <i className="fa-solid fa-bars" onClick={openDrawer}></i>
      </div>

      <Sidebar isOpen={isOpen} closeDrawer={closeDrawer} currUser={currUser}/>
  
      <div className='shopkeeper-dashboard-details-container'>
      {outlet || <p>Hey. Welcome to the foodpanda!</p>}
      </div>
    </div>
    </>
  )
}
