import React, { useEffect, useRef, useState } from 'react'
import "./UserInfo.css"
import { useNavigate } from "react-router-dom"
import myAxios from '../../MyAxios'
import ApiLoader from '../../ApiLoader/ApiLoader'

export default function UserInfo() {
  const navigate = useNavigate()
  const [currUser, setCurrUser] = useState(null)
  const [shop, setShop] = useState(null)
  const [loading, setLoading] = useState(false)
  const [updateName, setUpdateName] = useState(false)
  const [updateAdress, setUpdateAdress] = useState(false)
  const [updateCity, setUpdateCity] = useState(false)
  const [updateContact, setUpdateContact] = useState(false)
  const [updateAvatar, setUpdateAvatar] = useState(false)
  const [name, setName] = useState("")
  const [adress, setAdress] = useState("")
  const [city, setCity] = useState("")
  const [contact, setContact] = useState("")
  const [avatar, setAvatar] = useState("")
  const inputFile = useRef()

  useEffect(() => {
    let fetchingData = async () => {
      try {
        setLoading(true)
        let response = await myAxios.get("/user/get-user")
        let { user } = response.data
        setCurrUser(user)
      } catch (error) {
        console.error(error)
      }
      setLoading(false)
    }

    fetchingData()
  }, [])

  useEffect(() => {
    let fetchingData = async () => {
      try {
        setLoading(true)
        let response = await myAxios.get(`/shop/get-shop/${currUser?.shopId}`)
        let { shop } = response.data
        setShop(shop)
      } catch (error) {
        console.error(error)
      }
      setLoading(false)
    }
    fetchingData()
  }, [currUser?.shopId, updateName, updateAdress, updateCity, updateContact, updateAvatar])

  const backHandler = () => {
    if (currUser?.role === "shopadmin") {
      navigate("/shopadmin-dashboard")
    } else if (currUser?.role === "rider") {
      navigate("/rider-dashboard")
    } else {
      navigate("/")
    }
  }

  const updateNameHandler = async() => {
    if (updateName) {
      try {
        setLoading(true);
        await myAxios.patch("/shop/update-shop-details", {name : name})
      } catch (error) {
        console.error(error)
      }
      setUpdateName(false)
      setLoading(false)
    } else {
      setUpdateName(true)
    }
  }

  const updateAdressHandler = async() => {
    if (updateAdress) {
      try {
        setLoading(true);
        await myAxios.patch("/shop/update-shop-details", {adress : adress})
      } catch (error) {
        console.error(error)
      }
      setUpdateAdress(false)
      setLoading(false)
    } else {
      setUpdateAdress(true)
    }
  }

  const updateCityHandler = async() => {
    if (updateCity) {
      try {
        setLoading(true);
        await myAxios.patch("/shop/update-shop-details", {city : city})
      } catch (error) {
        console.error(error)
      }
      setUpdateCity(false)
      setLoading(false)
    } else {
      setUpdateCity(true)
    }
  }


  const updateContactHandler = async() => {
    if (updateContact) {
      try {
        setLoading(true);
        await myAxios.patch("/shop/update-shop-details", {contact : contact})
      } catch (error) {
        console.error(error)
      }
      setUpdateContact(false)
      setLoading(false)
    } else {
      setUpdateContact(true)
    }
  }

  const updateAvatarHandler = async() => {
    const formData = new FormData();
    formData.append("avatar", avatar)
      try {
        setLoading(true);
        await myAxios.patch("/shop/update-shop-avatar", formData, { headers : { "Content-Type" : "multipart/form-data"}})
      } catch (error) {
        console.error(error)
      }
      setUpdateAvatar(false)
      setLoading(false)
  }

  const chooseFile = () => {
    inputFile.current.click();
    setUpdateAvatar(true)
  }


  return (
    <>
      {loading && <ApiLoader />}
      <div className='user-info-container'>
        <div className='user-info-inner-container'>
          <div className='user-info-inner-container-1'>
            <div onClick={backHandler}>Back</div>
          </div>
          <div className='user-info-inner-container-2'>
          <div className='user-info-update-image-container'>
            {updateAvatar ? <div className='profile-icon' onClick={updateAvatarHandler}>Done</div> : <div onClick={chooseFile}><i className="profile-icon fa-solid fa-pen"/></div>}
            <input id="input-file-avatar" ref={inputFile} type='file' onChange={(e) => setAvatar(e.target.files)}/>
          </div>
            <span className='user-info-image-container'>
              <img
                src={currUser?.avatar || shop?.avatar || "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"}
                alt={currUser?.name} />
            </span>
          </div>
          <div className='user-info-inner-container-3'>
            <div>
              <div className='user-info-chunk-container'><label>Name:</label> {updateName ? <input className="input" value={name} onChange={(e) => setName(e.target.value)} /> : <div className='user-info-chunk'>{currUser?.name || shop?.name}</div>}</div>
              <div onClick={updateNameHandler}>{updateName ? <i className="icon fa-solid fa-check"></i> : <i className="icon fa-solid fa-pen"></i>}</div></div>
            <div>
              <div className='user-info-chunk-container'><label>Email: </label><div className='user-info-chunk'>{currUser?.email}</div></div>
            </div>
            <div>
              <div className='user-info-chunk-container'><label>Adress:</label> {updateAdress ? <input className="input" value={adress} onChange={(e) => setAdress(e.target.value)} /> :<div className='user-info-chunk'>{currUser?.adress || shop?.adress}</div>}</div>
              <div onClick={updateAdressHandler}>{updateAdress ? <i className="icon fa-solid fa-check"></i> : <i className="icon fa-solid fa-pen"></i>}</div></div>
            <div>
              <div className='user-info-chunk-container'><label>City:</label> {updateCity ? <input className="input" value={city} onChange={(e) => setCity(e.target.value)} /> : <div className='user-info-chunk'>{currUser?.city || shop?.city}</div>}</div>
              <div onClick={updateCityHandler}>{updateCity ? <i className="icon fa-solid fa-check"></i> : <i className="icon fa-solid fa-pen"></i>}</div></div>
            <div>
              <div className='user-info-chunk-container'><label>Contact:</label> {updateContact ? <input className="input" value={contact} onChange={(e) => setContact(e.target.value)} /> : <div className='user-info-chunk'>{currUser?.contact || shop?.contact}</div>}</div>
              <div onClick={updateContactHandler}>{updateContact ? <i className="icon fa-solid fa-check"></i> : <i className="icon fa-solid fa-pen"></i>}</div></div>

          </div>
        </div>
      </div>
    </>
  )
}
