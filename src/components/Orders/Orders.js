import React, { useEffect, useState } from 'react';
import "./Orders.css";
import Table from '../Table/Table';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Orders() {
    const [orders, setOrders] = useState([])
    const { shopId } = useParams()

    useEffect(()=> {
        let fetchingData = async() => {
          let res = await axios.get(`http://localhost:7000/api/v1/orders/get-all-orders/${shopId}`);
          setOrders(res.data.orders)
        }
    
        fetchingData()
      }, [])

    const deleteEntry = (Id) => {
        let filteredOrders = orders.filter((order) => order.id !== Id);
        setOrders(filteredOrders)
    }

    const tableHeadings = ["Id", "ProductName", "Image", "Price", "Quantity", "Order Name", "Adress", "Instruction", "Status", "Delete"]

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
