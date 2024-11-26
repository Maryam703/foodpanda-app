import React, { useEffect, useState } from 'react'
import "./Restaurants.css"
import RestaurantCard from '../RestaurantCard/RestaurantCard'
import myAxios from '../../MyAxios'

export default function Restaurant() {
  const [restaurants, setRestaurants] = useState([])
  const [shopName, setShopName] = useState("")


  useEffect(() => {
    const fetchingData = async() => {
      try {
      let res = await myAxios.get("/shop/get-all-shops");
      let { shops } = res.data;
      setRestaurants(shops)

      } catch (error) {
        console.error(error)
      }
    }
    fetchingData()
  }, [])

  const searchShopHandler = async() => {
    try {
      const res = await myAxios.get(`/shop/search-shop?keyword=${shopName}`)
      setRestaurants(res.data.shop)
    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <div>
      <div className='restaurant-search-bar'>
        <input placeholder='Search for a Restaurants' value={shopName} onChange={(e) => setShopName(e.target.value)}/>
        <button onClick={searchShopHandler}>Search</button>
      </div>

      <div className='restaurant-container--box'>
        {restaurants.length > 0 && restaurants.map((rest) => {
          return (
            <RestaurantCard
              key={rest._id}
              id={rest._id}
              name={rest.name}
              image={rest.avatar}
            />
          )
        })}
      </div>
    </div>
  )
}
