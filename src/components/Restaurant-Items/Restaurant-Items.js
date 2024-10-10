import React, { useState } from 'react'
import "./Restaurant-Items.css"
import FoodItemCard from '../FoodItemCard/FoodItemCard'

export default function RestaurantItems() {
    const [foodItems, setFoodItems] = useState([
    {
      id: 1,
      name: "Super Ice Point",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC8LVQp7_3-8xzCMPCUXwK37q0-NdYFpoF1A&s",
      cetagory: "Ice Bar",
      estimated_DC: 40,
    },
    {
      id: 2,
      name: "Super Ice Point",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC8LVQp7_3-8xzCMPCUXwK37q0-NdYFpoF1A&s",
      cetagory: "Ice Bar",
      estimated_DC: 40,
    },
    {
      id: 3,
      name: "Super Ice Point",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC8LVQp7_3-8xzCMPCUXwK37q0-NdYFpoF1A&s",
      cetagory: "Ice Bar",
      estimated_DC: 40,
    },
    {
      id: 4,
      name: "Super Ice Point",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC8LVQp7_3-8xzCMPCUXwK37q0-NdYFpoF1A&s",
      cetagory: "Ice Bar",
      estimated_DC: 40,
    },
    {
      id: 5,
      name: "Super Ice Point",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC8LVQp7_3-8xzCMPCUXwK37q0-NdYFpoF1A&s",
      cetagory: "Ice Bar",
      estimated_DC: 40,
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
    }
  ])

  return (
    <div>
      <div className='shopItem-search-bar'>
        <input placeholder='Search for your favorite food' />
        <button>Search</button>
      </div>

      <div className='shopItem-shop-dp-container'>
        <div className='shopItem-shop-dp'><img src='https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' alt='restaurant-image' /></div>
      </div>

      <h1 className='shopItem-page-title'>Super Ice Point</h1>

      <div className='shop-item-container--box'>
        {foodItems && foodItems.map((item) => {
          return (
            <FoodItemCard
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              cetagory={item.cetagory}
              estimatedTime={item.estimatedTime}
              estimatedDC={item.estimatedDC}
            />
          )
        })}
      </div>
    </div>
  )
}