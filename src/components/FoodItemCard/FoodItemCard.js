import React from 'react'
import "./FoodItemCard.css"
import { Link } from 'react-router-dom'

function FoodItemCard({ id, image, name, cetagory }) {

    let itemDetail = {
        id,
        image,
        name,
        cetagory,
        estimatedTime : "20min",
        estimatedDC : "20min"

    }

    const addToCartHandler = () => {
        let products = JSON.parse(localStorage.getItem("products"))
        if (products) {
            products.push(itemDetail)
            localStorage.setItem("products", JSON.stringify(products))

        } else {
            let products = []
            products.push(itemDetail);
            localStorage.setItem("products", JSON.stringify(products))
        }
    }

    return (
        <Link to={`/food-item/${id}`} className='food-item-card'>

            <div className='food-item-card-image'>
                <img src={image} alt={name} />
            </div>

            <div className='food-item-card-details-container'>

                <div className='food-item-card-details'>

                    <div className='food-item-card-title'>{name}</div>
                    <div className='food-item-card-category'>{cetagory}</div>
                    <div className='food-item-card-estimated-time-dc'>20min | Rs20</div>

                </div>

                <div className='food-item-card-add-option' onClick={addToCartHandler}>+</div>

            </div>

        </Link>
    )
}

export default FoodItemCard
