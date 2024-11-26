import React, { useEffect, useState } from 'react';
import "./OrderDetails.css"

import myAxios from '../../MyAxios';

export default function OrderDetails({orderId, closeViewOrder}) {
    const [order, setOrder] = useState(null)

    useEffect(() => {
        let fetchingData = async () => {
            try {
                let res = await myAxios.get(`/order/get-order/${orderId}`);
                let { order } = res.data;
                setOrder(order)
            } catch (error) {
                console.error(error)
            }
        };

        fetchingData()
    }, [orderId])

    return (
        <div className='order-details-container'>
        <div className='order-details-inner-container'>
            <div className='order-details-header'>
                <h2>
                    Order Details
                </h2>
                <i class="fa-solid fa-x" onClick={closeViewOrder}></i>
            </div>

            <div>
                <div>
                    {order && order.Items.map((item) => {
                        return <div className='order-details-info-container'>
                            <div>{item._id}</div>
                            <div>
                                <div className='order-details-img-container'><img src={item.image} alt={item.name} /></div>
                            </div>
                            <div>{item.name}</div>
                            <div>{item.quantity}</div>
                            <div>{item.price}</div>
                        </div>
                    })}
                    <div>{order?.shopName}</div>
                    <div className='order-details-user-info'>
                    <div>{order?.orderBy}</div>
                    <div>{order?.adress}</div>
                    <div>{order?.contact}</div>
                    <div className='order-details-info-total-price'>{order?.price}</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
