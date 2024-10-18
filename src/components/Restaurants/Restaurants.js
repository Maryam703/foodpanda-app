import React, { useEffect, useState } from 'react'
import "./Restaurants.css"
import RestaurantCard from '../RestaurantCard/RestaurantCard'
import myAxios from '../../MyAxios'

export default function Restaurant() {
  const [restaurants, setRestaurants] = useState([])

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
  

  return (
    <div>
      <div className='restaurant-search-bar'>
        <input placeholder='Search for a Restaurants' />
        <button>Search</button>
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
