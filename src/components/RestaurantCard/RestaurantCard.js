import React from 'react'
import "./RestaurantCard.css"
import { Link } from 'react-router-dom'

function RestaurantCard({ id, image, name }) {

    return (
        <Link to={`restaurant/${id}`} className='restaurant-card'>
            <div className='restaurant-card-image'>
                <img src={image} alt={name} />
            </div>
            <div className='restaurant-card-details-container'>
                <div className='restaurant-card-details'>
                    <div className='restaurant-card-title'>{name}</div>
                    <div className='restaurant-card-estimated-time-dc'>20min | Rs50</div>
                </div>
            </div>
        </Link>
    )
}

export default RestaurantCard
