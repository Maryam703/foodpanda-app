import React from 'react'
import "./FoodItemCard.css"
import { Link } from 'react-router-dom'

function FoodItemCard({ id, image, name, cetagory, estimatedTime, estimatedDC }) {
    return (
        <Link to={`food-item/${id}`} className='food-item-card'>
            <div className='food-item-card-image'>
                <img src={image} alt={name} />
            </div>
            <div className='food-item-card-title'>{name}</div>
            <div className='food-item-card-category'>{cetagory}</div>
            <div className='food-item-card-estimated-time-dc'>{estimatedTime}min | Rs{estimatedDC}</div>
        </Link>
    )
}

export default FoodItemCard
