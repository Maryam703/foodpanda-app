import React, { useEffect, useState } from 'react';
import "./Cart.css";
import { useNavigate } from 'react-router-dom';
import myAxios from '../../MyAxios';

export default function Cart() {
  const [checkCultery, setCheckCultery] = useState(false);
  const [currentUser, setCurrentUser] = useState(null)
  const [subTotal, setSubTotal] = useState(null); //price of all products
  const [totalPrice, setTotalPrice] = useState(null); //price inc tax
  const [cartItems, setCartItems] = useState([]) //item placed in cart
  const [restaurant, setRestaurant] = useState(null) //get shop to give in order details
  const navigate = useNavigate();

  useEffect(() => {
    let products = JSON.parse(localStorage.getItem("products"));
    setCartItems(products)
  }, [])

  useEffect(() => {
    const fetchingData = async () => {
      try {
        let res = await myAxios.get("/user/get-user");
        let { user } = res.data
        setCurrentUser(user)
      } catch (error) {
        console.error(error)
      }
    }

    fetchingData()
  }, [])

  useEffect(() => {
    const fetchingData = async () => {
      try {
        let shopItem = cartItems?.length > 0 && cartItems.find((item) => item.shopId)
        let shopId = shopItem?.shopId;

        if (shopId) {
          let res = await myAxios.get(`/shop/get-shop/${shopId}`);
          let { shop } = res.data;
          setRestaurant(shop)
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchingData()
  }, [cartItems])

  //given charges
  let standardDC = 50;
  let platFormFee = 10;
  let CulteryFee = 50;

  useEffect(() => {
    //calculating total price, 0 is the initial value of acc in reduce method
    const totalPriceOfProducts = cartItems?.length > 0 && cartItems.map((item) => item.price).reduce((acc, price) => acc + price, 0);
    setSubTotal(totalPriceOfProducts)

    //calculating total price with or without cutlery
    let pricesWithOutCutlery = [subTotal, standardDC, platFormFee]
    let totalPriceWithOutCutlery = pricesWithOutCutlery.reduce((acc, prices) => acc + prices, 0)

    let pricesWithCutlery = [subTotal, standardDC, platFormFee, CulteryFee]
    let totalPriceWithCutlery = pricesWithCutlery.reduce((acc, prices) => acc + prices, 0)

    if (checkCultery) {
      setTotalPrice(totalPriceWithCutlery)
    } else {
      setTotalPrice(totalPriceWithOutCutlery)
    }

  }, [subTotal, checkCultery])

  const placeOrderHandler = async () => {
   
    let orderData = {
      Items: cartItems,
      shopId: restaurant?._id,
      shopName: restaurant?.name,
      orderBy: currentUser?.name,
      adress: currentUser?.adress,
      contact: currentUser?.contact,
      price: totalPrice,
      riderId: null,
      status: "pending"
    }

    try {
      let res = await myAxios.post("/order/create-new-order", orderData)
      let {order} = res.data;

      if (order) {
        localStorage.removeItem("products")
      }
    } catch (error) {
      console.error(error)
    }
    navigate("/track-order")
  }


  return (
    <div className='cart-container'>
      {cartItems && cartItems.length > 0 ? 
      <div className='cart-inner-container'>

      <div className='cart-header'>
        <b>Cart</b>
        <p>{restaurant?.name}</p>
      </div>

      <div className='cart-status-container'>
        <div className='cart-status-rider-box'>
          <img src='https://images.deliveryhero.io/image/fd-sg/LP/pandago/5.png' alt='image' />
        </div>
        <div className='cart-status-box--2'>
          Est. Delivery Time
          <br />
          <b>Standard(5 - 20mins)</b>
        </div>
      </div>

      {/* cartitems */}
      {cartItems && cartItems.map((item) => {
        return (
          <div className='cart-order-detail'>
            <div className='cart-order-img-container'>
              <img src={item?.image} alt={item?.name} />
            </div>
            <div className='cart-order-title'>{item?.name}</div>
            <div className='cart-order-price'>Rs- {item?.price}</div>
          </div>
        )
      })}

      <div className='cart-pricing-detail'>
        <div className='cart-indiviuals-pricing-details'><p>subtotal</p>Rs- {subTotal}</div>
        <div className='cart-indiviuals-pricing-details'><p>Standard Delivery</p> <p>Rs- {standardDC}</p></div>
        <div className='cart-indiviuals-pricing-details'><p>Platform Free</p> <p>Rs- {platFormFee}</p></div>
        {checkCultery && <div className='cart-indiviuals-pricing-details'><p>Cultery Charges</p> <p>Rs- {CulteryFee}</p></div>}
      </div>

      <div className='cart-cutlery-box'>
        <input type='checkbox' value={checkCultery} onChange={(e) => setCheckCultery(e.target.checked)} />
        <div>
          <div>
            <i className="cultary-para fa-solid fa-utensils"></i>
            <b className="cultary-para">Cutlery</b>
          </div>
          <p>if avavilable, your oredr will come with cutlery</p>
        </div>
      </div>

      {currentUser && <div className='cart-customer-adress'>
        <div>{currentUser.adress}</div>
        <div>{currentUser.city}</div>
        <div>{currentUser.contact}</div>
      </div>}

      <div className='cart-place-order-container'>

        <div className='cart-place-order-payment'>
          <div>Total(incl. fees an tax)</div>
          <b>Rs- {totalPrice}</b>
        </div>

        <div className='cart-place-order-button'>
          <button onClick={placeOrderHandler}>Confirm place order</button>
        </div>

      </div>
    </div>
    :
    <div className='cart-empty-container'>Your cart is empty!</div>
    }
    </div>
  )
}