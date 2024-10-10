import React, { useState } from 'react'
import "./ItemDetail.css";
import FoodItemCard from '../FoodItemCard/FoodItemCard';
import { useNavigate, useParams } from 'react-router-dom';

export default function ItemDetail() {
    const navigate = useNavigate()
    const [foodItems, setFoodItems] = useState([
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
            estimatedTime: "40",
            estimatedDC: "40"
        }
    ])
    const { id } = useParams()
    console.log(id)

    const addToCartHandler = () => {
        navigate("/cart")
    }

    return (
        <>
            <div className='item-detail-container'>
                <div>
                    <div className='item-detail-left-side'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC8LVQp7_3-8xzCMPCUXwK37q0-NdYFpoF1A&s' alt='item-image' />
                    </div>
                </div>

                <div>
                    <div className='item-detail-right-side'>
                        <div className='item-detail-right-side-title'>Biryani</div>
                        <div className='item-detail-right-side-cetagory'>lunch</div>
                        <div className='item-detail-right-side-description'>absjbc cjblclec kwoie wwvoubwe cwbeovuwqe efcouqebf weufuwef woeuvcuwe wkjefwuie lorem ipsem</div>
                        <select className='item-detail-right-side-quantity'>
                            <option>select</option>
                            <option>single serving</option>
                            <option>2 person</option>
                            <option>4 person</option>
                        </select>
                        <div className='item-detail-right-side-time'>Estimated delivery time: 40min</div>
                        <div className='item-detail-right-side-dc'>Estimated delivery charges: Rs40</div>
                        <button onClick={addToCartHandler}>Add to cart</button>
                    </div>
                </div>
            </div>

            <div className='item-detail-related-items'>More food items from this shop</div>
            <div className='item-detail-related-items-container'>
                {foodItems && foodItems.map((item) => {
                    return (
                        <FoodItemCard
                            key={item.key}
                            id={item.id}
                            image={item.image}
                            name={item.name}
                            cetagory={item.cetagory}
                            estimatedTime={item.estimatedTime}
                            estimatedDC={item.estimatedDC} />
                    )
                })}
            </div>
        </>
    )
}
