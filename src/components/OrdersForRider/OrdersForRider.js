import React, { useEffect, useState } from 'react';
import "./OrdersForRider.css";
import Table from '../Table/Table';
import myAxios from '../../MyAxios';
import ApiLoader from '../../ApiLoader/ApiLoader';

export default function OrdersForRider() {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)
    const [reload, setReload] = useState(false)

    useEffect(() => {
        let fetchingData = async() => {
            try {
                setLoading(true)
                let res = await myAxios.get("/order/get-all-orders");
                let { orders } = res.data;
                let riderOrders = orders.filter((order) => order.riderId !== null)

                setOrders(riderOrders)
            } catch (error) {
                console.error(error)
            }
            setLoading(false)
            setReload(false)
        }
        fetchingData()
    }, [reload])

    const completeOrderHandler = async(itemId) => {
        try {
            const dataForUpdate = {
                status: "completed"
            }
            let res = await myAxios.patch(`/order/update-order/${itemId}`, dataForUpdate);
            let { updatedOrder } = res.data;
            console.log(updatedOrder)
        } catch (error) {
            console.error(error)
        }
        setReload(true)
    }

    const tableHeadings = ["Id", "Shop Name", "Order Name",  "Adress", "Contact", "Price", "Order Details", "Status"]
    
    return (
        <>
        {loading && <ApiLoader/>}
        <div className='rider-order-container'>
            <div className='rider-order-inner-container'>

                <div className='rider-order-header'>
                    <h1>Your Orders</h1>
                </div>

                <div className='rider-order-table-container'>
                    <Table
                        tableHeadings={tableHeadings}
                        tableData={orders}
                        completeOrderHandler = {completeOrderHandler}
                    />
                </div>

            </div>
        </div>
        </>
    )
}
