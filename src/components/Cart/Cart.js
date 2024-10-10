import React, { useState } from 'react';
import "./Cart.css";
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const [checkCultery, setCheckCultery] = useState(false);
  const navigate = useNavigate()

  const placeOrderHandler = () => {
    navigate("/track-order")
  }

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

        <div className='cart-order-detail'>
          <div className='cart-order-img-container'>
            <img src='https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg' alt='image' />
          </div>
          <div className='cart-order-title'>Malai Boti Chicken</div>
          <div className='cart-order-price'>Rs. 335</div>
        </div>

        <div className='cart-pricing-detail'>
          <div className='cart-indiviuals-pricing-details'><p>subtotal</p> <p>Rs.335</p></div>
          <div className='cart-indiviuals-pricing-details'><p>Standard Delivery</p> <p>Rs.49</p></div>
          <div className='cart-indiviuals-pricing-details'><p>Platform Free</p> <p>Rs.9.00</p></div>
          {checkCultery && <div className='cart-indiviuals-pricing-details'><p>Cultery Charges</p> <p>Rs.50.00</p></div>}
        </div>

        <div className='cart-cutlery-box'>
          <input type='checkbox' value={checkCultery} onChange={(e) => setCheckCultery(e.target.checked)} />
          <div>
            <div>
              <i className="cultary-para fa-solid fa-utensils"></i>
              <b className="cultary-para">Cutlery</b>
            </div>
            <p>no cutlery provided. Thanks for reducing waste!</p>
            {/* <p>if avavilable, your oredr will come with cutlery</p> */}
          </div>
        </div>

        <div className='cart-customer-adress'>
          <div>adress jqd JQWD;OU2 jqdeckjb lkef2IHF3</div>
          <div>adressJBF32If flj'FOI24   IHFP</div>
          <div>adress 0230917986466941</div>
        </div>

        <div className='cart-place-order-container'>

          <div className='cart-place-order-payment'>
            <div>Total(incl. fees an tax)</div>
            <b>Rs. 393.99</b>
          </div>

          <div className='cart-place-order-button'>
            <button onClick={placeOrderHandler}>Confirm place order</button>
          </div>

        </div>
      </div>
    </div>
  )
}