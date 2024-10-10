import React from 'react';
import "./OrderTrack.css"
import Loader from '../Loader/Loader';
import { useNavigate } from 'react-router-dom';

function OrderTrack() {
    const navigate = useNavigate();

    const helpHandler = () => {
        navigate("/about")
    }
    return (
        <div className='order-track-contaier'>
            <div className='order-track-inner-contaier'>
                <div className='order-track-heading'>
                    <b>Your Order</b>
                    <div onClick={helpHandler}>Help</div>
                </div>

                <div className='order-track-time-update'>
                    Estimated time of delivery
                    <b>15 - 20 min</b>
                </div>

                <div className='order-track-delivery-update'>
                    <img src='https://images.deliveryhero.io/image/fd-sg/LP/pandago/5.png' alt='delivering...' /> 
                    {/* <img src='https://pandariders.info/wp-content/themes/panda-raiders/img/banner-lady.png' alt='making...' />*/}
                </div>


                <div className='order-track-loader-container'>
                    <Loader />
                </div>

                <div className='order-track-status-updates'><b>Order status: We've ot a rider! They're heading to the restaurant</b></div>

                <div className='order-track-contact-rider'>
                    <div className='order-track-contact-rider-dp'>
                        <img src='https://pandariders.foodpanda.ph/wp-content/uploads/sites/18/2023/03/FAQ_1200x630-600x316.jpg' alt='rider' />
                    </div>
                    <div className='order-track-contact-rider-contact'>
                        <b>Contact your rider</b>
                        Add delivery restructions
                    </div>
                        <i class="fa-regular fa-message"></i>
                    </div>

                    <div className='order-track-delivery-details'>
                        <div className='order-track-delivery-details--1'> 
                            <i class="fa-solid fa-location-dot"></i>
                            <b>Delivery details</b>
                            <div>Edit</div>
                        </div>
                        <div className='order-track-delivery-details--2' >
                            complete adress for Order location
                            <br/>
                            adress city 
                            <br/>
                            note: from rider if any
                            <b>delivered by restaurant name</b>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default OrderTrack
