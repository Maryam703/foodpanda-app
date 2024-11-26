import React from 'react'
import "./FoodItemCard.css"
import { Link, useNavigate } from 'react-router-dom'

function FoodItemCard({ id, image, name, cetagory, description, price, quantity, shopId }) {
    const navigate = useNavigate()

    let itemDetail = {
        id,
        name,
        image,
        price,
        quantity,
        cetagory,
        description,
        shopId,
        estimatedTime: "20min",
        estimatedDC: "20min"

    }

    const addToCartHandler = () => {
        let products = JSON.parse(localStorage.getItem("products"));
        let user = JSON.parse(localStorage.getItem("user"));

        if (products) {
            products.push({ ...itemDetail })
            localStorage.setItem("products", JSON.stringify(products))

        } else {
            let products = []
            products.push({ ...itemDetail });
            localStorage.setItem("products", JSON.stringify(products))
        }

        if (user) {
            navigate("/cart")
        }else{
            navigate("/login")
        }
    }

    return (
        <div className='food-item-card'>

            <Link to={`/food-item/${id}`} >
                <div className='food-item-card-image'>
                    <img src={image} alt={name} />
                </div>
            </Link>

            <div className='food-item-card-details-container'>

                <div className='food-item-card-details'>

                    <div className='food-item-card-title'>{name}</div>
                    <div className='food-item-card-category'>{cetagory}</div>
                    <div className='food-item-card-estimated-time-dc'>20min | Rs20</div>

                </div>

                <div className='food-item-card-add-option' onClick={addToCartHandler}>+</div>

            </div>

        </div>
    )
}

export default FoodItemCard
