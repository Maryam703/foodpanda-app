import React, { useState } from 'react'
import "./Shop.css"
import ShopCard from '../ShopCard/ShopCard'

export default function Shop() {
  const [shops, setShops] = useState([
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
      <div className='shop-search-bar'>
        <input placeholder='Search for a shop' />
        <button>Search</button>
      </div>

      <div className='shop-container--box'>
        {shops && shops.map((shop) => {
          return (
            <ShopCard
              key={shop.id}
              id={shop.id}
              name={shop.name}
              image={shop.image}
              cetagory={shop.cetagory}
              estimatedTime={shop.estimatedTime}
              estimatedDC={shop.estimatedDC}
            />
          )
        })}
      </div>
    </div>
  )
}
