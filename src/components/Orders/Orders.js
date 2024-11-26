import React, { useEffect, useState } from 'react';
import "./Orders.css";
import Table from '../Table/Table';
import myAxios from '../../MyAxios';
import ApiLoader from '../../ApiLoader/ApiLoader';

export default function Orders() {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)
    const [reload, setReload] = useState(false)
    
    useEffect(() => {
        let fetchingData = async() => {
            try {
                setLoading(true)
                let res = await myAxios.get("/order/get-all-orders");
                let { orders } = res.data;
                let allPendingOrders = orders.filter((order) => order.riderId === null)

                setOrders(allPendingOrders)
            } catch (error) {
                console.error(error)
            }
            setLoading(false)
            setReload(false)
        }
        fetchingData()
    }, [reload])

    const pickOrderHandler = async (itemId) => {
        try {
            let user = JSON.parse(localStorage.getItem("user"))
            const dataForUpdate = {
                riderId: user?._id,
                status: "picked"
            }
            let res = await myAxios.patch(`/order/update-order/${itemId}`, dataForUpdate);
            let { updatedOrder } = res.data;
            console.log(updatedOrder);
            setReload(true)
        } catch (error) {
            console.error(error)
        }
    }

    const tableHeadings = ["Id", "Shop Name", "Order Name",  "Adress", "Contact", "Price", "Order Details", "Status", "Pick"]
    
    return (
        <>
        {loading && <ApiLoader />}
        <div className='rider-order-container'>
            <div className='rider-order-inner-container'>

                <div className='rider-order-header'>
                    <h1>All Orders</h1>
                </div>

                <div className='rider-order-table-container'>
                    <Table
                        tableHeadings={tableHeadings}
                        tableData={orders}
                        pickOrderHandler={pickOrderHandler}
                    />
                </div>

            </div>
        </div>
        </>
    )
}
