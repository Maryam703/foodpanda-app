import React, { useState } from 'react'
import "./Restaurants.css"
import RestaurantCard from '../RestaurantCard/RestaurantCard'

export default function Restaurant() {
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      name: "Super Ice Point",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC8LVQp7_3-8xzCMPCUXwK37q0-NdYFpoF1A&s",
      cetagory: "Ice Bar",
      estimated_DC: 40
    },
    {
      id: 2,
      name: "Super Ice Point",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC8LVQp7_3-8xzCMPCUXwK37q0-NdYFpoF1A&s",
      cetagory: "Ice Bar",
      estimated_DC: 40
    },
    {
      id: 3,
      name: "Super Ice Point",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC8LVQp7_3-8xzCMPCUXwK37q0-NdYFpoF1A&s",
      cetagory: "Ice Bar",
      estimated_DC: 40
    },
    {
      id: 4,
      name: "Super Ice Point",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC8LVQp7_3-8xzCMPCUXwK37q0-NdYFpoF1A&s",
      cetagory: "Ice Bar",
      estimated_DC: 40
    },
    {
      id: 5,
      name: "Super Ice Point",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC8LVQp7_3-8xzCMPCUXwK37q0-NdYFpoF1A&s",
      cetagory: "Ice Bar",
      estimated_DC: 40
    },
    {
      id: 6,
      name: "Super Ice Point",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC8LVQp7_3-8xzCMPCUXwK37q0-NdYFpoF1A&s",
      cetagory: "Ice Bar",
      estimated_DC: 40
    },
    {
      id: 7,
      name: "Super Ice Point",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC8LVQp7_3-8xzCMPCUXwK37q0-NdYFpoF1A&s",
      cetagory: "Ice Bar",
      estimatedTime: 40,
      estimatedDC: 40
    },
    {
      id: 6,
      name: "Super Ice Point",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC8LVQp7_3-8xzCMPCUXwK37q0-NdYFpoF1A&s",
      cetagory: "Ice Bar",
      estimated_DC: 40
    },
    {
      id: 7,
      name: "Super Ice Point",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC8LVQp7_3-8xzCMPCUXwK37q0-NdYFpoF1A&s",
      cetagory: "Ice Bar",
      estimatedTime: 40,
      estimatedDC: 40
    },
    {
      id: 6,
      name: "Super Ice Point",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC8LVQp7_3-8xzCMPCUXwK37q0-NdYFpoF1A&s",
      cetagory: "Ice Bar",
      estimated_DC: 40
    },
    {
      id: 7,
      name: "Super Ice Point",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC8LVQp7_3-8xzCMPCUXwK37q0-NdYFpoF1A&s",
      cetagory: "Ice Bar",
      estimatedTime: "40",
      estimatedDC: "40"
    }
  ])

  return (
    <div>
      <div className='restaurant-search-bar'>
        <input placeholder='Search for a Restaurants' />
        <button>Search</button>
      </div>

      <div className='restaurant-container--box'>
        {restaurants && restaurants.map((rest) => {
          return (
            <RestaurantCard
              key={rest.id}
              id={rest.id}
              name={rest.name}
              image={rest.image}
              cetagory={rest.cetagory}
              estimatedTime={rest.estimatedTime}
              estimatedDC={rest.estimatedDC}
            />
          )
        })}
      </div>
    </div>
  )
}
