import React, { useEffect, useState } from 'react';
import "./OrdersForRider.css";
import Table from '../Table/Table';
import axios from 'axios';

export default function OrdersForRider() {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        let fetchingData = async() => {
            try {
                let res = await axios.get("http://localhost:7000/api/v1/order/get-all-orders");
                let orders = res.data.orders
                setOrders(orders)
            } catch (error) {
                console.error(error)
            }
        }
        fetchingData()
    }, [])
   
    const deleteEntry = (Id) => {
        let filteredOrders = orders.filter((order) => order.id !== Id);
        setOrders(filteredOrders)
    }

    const tableHeadings = ["Id", "ProductName", "Image", "Price", "Quantity","RestaurantName","Order Name", "Adress", "Instruction", "Status", "Delete"]

    return (
        <div className='orders-container'>
            <div className='orders-inner-container'>

                <div className='orders-header'>
                    <h1>Orders</h1>
                </div>

                <div className='orders-table-container'>
                    <Table
                        tableHeadings={tableHeadings}
                        tableData={orders}
                        deleteEntry={deleteEntry}
                    />
                </div>

            </div>
        </div>
    )
}
