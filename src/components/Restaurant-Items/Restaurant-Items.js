import React, { useEffect, useState } from 'react'
import "./Restaurant-Items.css";
import FoodItemCard from '../FoodItemCard/FoodItemCard'
import { useParams } from 'react-router-dom';
import myAxios from '../../MyAxios';
import axios from 'axios';

export default function RestaurantItems() {
  const [shop, setShop] = useState(null)
    const [foodItems, setFoodItems] = useState([]);
    const [itemName, setItemName] = useState("")
    const { id } = useParams();

    useEffect(() => {
      const fetchingData = async() => {
        try {
        let res = await axios.get(`http://localhost:9000/api/v1/shop/get-shop/${id}`);
        let { shop } = res.data;
        setShop(shop)
  
        } catch (error) {
          console.error(error)
        }
      }
      fetchingData()
    }, [id])

    useEffect(() => {
      const fetchingData = async() => {
        try {
        let res = await myAxios.get(`/product/get-all-products/${id}`);
        let { products } = res.data
        setFoodItems(products)
  
        } catch (error) {
          console.error(error)
        }
      }
      fetchingData()
    }, [id])

    const searchFoodHandler = async() => {
      try {
        let res = await myAxios(`/product/search-product?keyword=${itemName}`)
        let { product } = res.data;
        setFoodItems(product)
      } catch (error) {
        console.error(error)
      }
    }

  return (
    <div>
      <div className='shopItem-search-bar'>
        <input placeholder='Search for your favorite food' value={itemName} onChange={(e) => setItemName(e.target.value)}/>
        <button onClick={searchFoodHandler}>Search</button>
      </div>

      <div className='shopItem-shop-dp-container'>
        <div className='shopItem-shop-dp'><img src={shop?.avatar} alt={shop?.name} /></div>
      </div>

      <h1 className='shopItem-page-title'>{shop?.name}</h1>

      <div className='shop-item-container--box'>
        {foodItems && foodItems?.length > 0 && foodItems.map((item) => {
          return (
            <FoodItemCard
              key={item._id}
              id={item._id}
              name={item.name}
              image={item.image}
              description={item.descrition}
              price={item.price}
              cetagory={item.cetagory}
              quantity= "single serving"
              shopId={item.shopId}
            />
          )
        })}
      </div>
    </div>
  )
}