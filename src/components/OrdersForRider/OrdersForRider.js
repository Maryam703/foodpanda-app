import React, { useState } from 'react';
import "./OrdersForRider.css";
import Table from '../Table/Table';

export default function OrdersForRider() {
    const [orders, setOrders] = useState([
        {
            id: 12345,
            productName: "Biryani",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvC1pGhW7_BRwnGuBguLE99tfA0faYflekCA&s",
            totalPrice: 25,
            quantity: "1kg",
            orderName: "User Name",
            adress: "qilla gojran opposite jnaza gah wasu road, MandiBahauddin",
            instruction: "Must be delicious",
            Status: "Pending"
        },
        {
            id: 12345,
            productName: "Biryani",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvC1pGhW7_BRwnGuBguLE99tfA0faYflekCA&s",
            totalPrice: 25,
            quantity: "1kg",
            orderName: "User Name",
            adress: "qilla gojran opposite jnaza gah wasu road, MandiBahauddin",
            instruction: "Must be delicious",
            Status: "Pending"
        },
        {
            id: 12345,
            productName: "Biryani",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvC1pGhW7_BRwnGuBguLE99tfA0faYflekCA&s",
            totalPrice: 25,
            quantity: "1kg",
            orderName: "User Name",
            adress: "qilla gojran opposite jnaza gah wasu road, MandiBahauddin",
            instruction: "Must be delicious",
            Status: "Pending"
        }
    ])

    const tableHeadings = ["Id", "ProductName", "Image", "Price", "Quantity", "Order Name", "Adress", "Instruction", "Status", "Delete"]

    const deleteEntry = (Id) => {
        let filteredOrders = orders.filter((order) => order.id !== Id);
        setOrders(filteredOrders)
    }

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
