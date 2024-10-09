import React from 'react'
import "./ShopCard.css"
import { Link } from 'react-router-dom'

function ShopCard({ id, image, name, cetagory, estimatedTime, estimatedDC }) {
    return (
        <Link to={`shop/${id}`} className='shop-card'>
            <div className='shop-card-image'>
                <img src={image} alt={name} />
            </div>
            <div className='shop-card-title'>{name}</div>
            <div className='shop-card-category'>{cetagory}</div>
            <div className='shop-card-estimated-time-dc'>{estimatedTime}min | Rs{estimatedDC}</div>
        </Link>
    )
}

export default ShopCard
