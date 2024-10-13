import React, { useEffect, useState } from 'react';
import "./Cart.css";
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const [checkCultery, setCheckCultery] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "jwkckwjc",
    adress: "xxxxxxxxxxxxxx",
    city: "xxxxxxxxxxxxxx",
    contact: "xxxxxxxxxxxxxx",
  })
  const [subTotal, setSubTotal] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  const [cartItems, setCartItems] = useState([
    {
    name : "malai boti",
    price: 25,
    image : 'https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg'
  },
  {
    name : "malai boti",
    price: 25,
    image : 'https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg'
  },
  {
    name : "malai boti",
    price: 25,
    image : 'https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg'
  },
  {
    name : "malai boti",
    price: 25,
    image : 'https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg'
  }
])
  const navigate = useNavigate()


  //given charges
  let standardDC = 50;
  let platFormFee = 10;
  let CulteryFee = 50;

  const placeOrderHandler = () => {
    navigate("/track-order")
  }

  useEffect(() => {
    //calculating total price
    const totalPriceOfProducts = cartItems && cartItems.map((item) => item.price).reduce((acc, price) => acc + price , 0);
    setSubTotal(totalPriceOfProducts)

     //calculating total price with or without cutlery
    let pricesWithOutCutlery = [subTotal, standardDC, platFormFee]
    let pricesWithCutlery = [subTotal, standardDC, platFormFee, CulteryFee]

    let totalPriceWithOutCutlery = pricesWithOutCutlery.reduce((acc, prices) => acc + prices, 0)

    let totalPriceWithCutlery = pricesWithCutlery.reduce((acc, prices) => acc + prices, 0)

    if (checkCultery) {
      setTotalPrice(totalPriceWithCutlery)
    }else{
      setTotalPrice(totalPriceWithOutCutlery)
    }

  } , [subTotal, checkCultery])

  // let user;
  // useEffect(() => {
  //   user = JSON.parse(localStorage.getItem("user"));
  //   setCurrentUser(user)
  // } , [])



  return (
    <div className='cart-container'>
      <div className='cart-inner-container'>

        <div className='cart-header'>
          <b>Cart</b>
          <p>restaurant name</p>
        </div>

        <div className='cart-status-container'>
          <div className='cart-status-rider-box'>
            <img src='https://entrackr.com/storage/2019/06/food-delivery.jpg' alt='image' />
          </div>
          <div className='cart-status-box--2'>
            Est. Delivery Time
            <br />
            <b>Standard(5 - 20mins)</b>
          </div>
        </div>

        {/* cartitems */}
        {cartItems && cartItems.map((item) => {
          return(
            <div className='cart-order-detail'>
            <div className='cart-order-img-container'>
              <img src={item.image} alt={item.name} />
            </div>
            <div className='cart-order-title'>{item.name}</div>
            <div className='cart-order-price'>Rs- {item.price}</div>
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
    </div>
  )
}