import React, { useEffect, useState } from 'react'
import "./UserInfo.css"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

export default function UserInfo() {
  const navigate = useNavigate()
  const [currUser, setCurrUser] = useState(null)

  useEffect(() => {
    let fetchingData = async () => {
      try {
        let response = await axios.get("http://localhost:7000/api/v1/user/get-user")
        let { user } = response.data
        setCurrUser(user)
      } catch (error) {
        console.error(error)
      }
    }

    fetchingData()
  }, [])


  const backHandler = () => {
    navigate("/")
  }

  return (
    <div className='user-info-container'>
      <div className='user-info-inner-container'>
        <div className='user-info-inner-container-1' onClick={backHandler}>
          <div>Back</div>
          <div>Edit info</div>
        </div>
        <div className='user-info-inner-container-2'>
          <span className='user-info-image-container'>
            <img
              src={currUser?.avatar || "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"}
              alt={currUser?.name} />
          </span>
        </div>
        <div className='user-info-inner-container-3'>
          <div>Name: {currUser?.name}</div>
          <div>Email: {currUser?.email}</div>
          <div>Adress: {currUser?.adress}</div>
          <div>City: {currUser?.city}</div>
          <div>Contact: {currUser?.contact}</div>
         </div>
      </div>
    </div>
  )
}
