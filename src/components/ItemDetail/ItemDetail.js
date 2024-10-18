import React, { useEffect, useState } from 'react'
import "./ItemDetail.css";
import FoodItemCard from '../FoodItemCard/FoodItemCard';
import { useParams } from 'react-router-dom';
import myAxios from '../../MyAxios';

export default function ItemDetail() {
    const [itemDetail, setItemDetail] = useState(null);
    const [foodItems, setFoodItems] = useState([]);
    const [selectedQuantity, setSelectedQuantity] = useState("single serving")
    const { id } = useParams();
    console.log(itemDetail)

    useEffect(() => {
        const fetchingData = async () => {
            try {
                let res = await myAxios.get(`/product/get-product/${id}`)
                let { product } = res.data;
                setItemDetail(product)

            } catch (error) {
                console.error(error)
            }
        }
        fetchingData()
    }, [id])

    useEffect(() => {
        const fetchingData = async () => {
            try {
                let res = await myAxios.get(`/product/get-all-products/${itemDetail?.shopId}`)
                let { products } = res.data;
                setFoodItems(products)

            } catch (error) {
                console.error(error)
            }
        }
        fetchingData()
    }, [itemDetail?.shopId])


    const addToCartHandler = () => {
        let products = JSON.parse(localStorage.getItem("products"));

        let updatedPrice;
        if (selectedQuantity === "2 servings") {
            updatedPrice = itemDetail.price * 2
        } else if (selectedQuantity === "4 servings") {
            updatedPrice = itemDetail.price * 4
        } else if (selectedQuantity === "6 servings") {
            updatedPrice = itemDetail.price * 6
        } else {
            updatedPrice = itemDetail.price
        }

        if (products) {
            products.push({ ...itemDetail, price: updatedPrice, quantity: selectedQuantity })
            localStorage.setItem("products", JSON.stringify(products))

        } else {
            let products = []
            products.push({ ...itemDetail, price: updatedPrice, quantity: selectedQuantity });
            localStorage.setItem("products", JSON.stringify(products))
        }
    }

    return (
        <>
            <div className='item-detail-container'>
                <div>
                    <div className='item-detail-left-side'>
                        <img src={itemDetail?.image} alt={itemDetail?.name} />
                    </div>
                </div>

                <div>
                    <div className='item-detail-right-side'>
                        <div className='item-detail-right-side-title'>{itemDetail?.name}</div>
                        <div className='item-detail-right-side-cetagory'>{itemDetail?.category}</div>
                        <div className='item-detail-right-side-description'>{itemDetail?.description}</div>
                        <div className='item-detail-right-side-title'>Rs- {itemDetail?.price}</div>
                        <select
                            className='item-detail-right-side-selector'
                            defaultValue={selectedQuantity}
                            onChange={(e) => setSelectedQuantity(e.target.value)}>
                            <option selected value="single serving">single serving</option>
                            <option value="2 servings">2 servings</option>
                            <option value="4 servings">4 servings</option>
                            <option value="6 servings">family meal</option>
                        </select>
                        <div className='item-detail-right-side-time'>Estimated delivery time: 40min</div>
                        <div className='item-detail-right-side-dc'>Estimated delivery charges: Rs40</div>
                        <button onClick={addToCartHandler}>Add to cart</button>
                    </div>
                </div>
            </div>

            <div className='item-detail-related-items'>More food items from this shop</div>
            <div className='item-detail-related-items-container'>
                {foodItems?.length > 0 && foodItems.map((item) => {
                    return (
                        <FoodItemCard
                            key={item._id}
                            id={item._id}
                            image={item.image}
                            name={item.name}
                            cetagory={item.cetagory}
                        />
                    )
                })}
            </div>
        </>
    )
}
