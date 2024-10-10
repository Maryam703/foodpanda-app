import React from 'react'
import "./RestaurantCard.css"
import { Link } from 'react-router-dom'

function RestaurantCard({ id, image, name, cetagory, estimatedTime, estimatedDC }) {
    return (
        <Link to={`restaurant/${id}`} className='restaurant-card'>
            <div className='restaurant-card-image'>
                <img src={image} alt={name} />
            </div>
            <div className='restaurant-card-title'>{name}</div>
            <div className='restaurant-card-category'>{cetagory}</div>
            <div className='restaurant-card-estimated-time-dc'>{estimatedTime}min | Rs{estimatedDC}</div>
        </Link>
    )
}

export default RestaurantCard
