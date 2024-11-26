import React, { useEffect, useState } from 'react';
import "./OrdersForShop.css";
import Table from '../Table/Table';
import { useParams } from 'react-router-dom';
import myAxios from '../../MyAxios';
import ApiLoader from '../../ApiLoader/ApiLoader';

export default function OrdersForShop() {
    const [orders, setOrders] = useState([])
    const [reload, setReload] = useState(false)
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        let fetchingData = async () => {
            setLoading(true)
            try {
                let res = await myAxios.get(`/order/get-shop-orders/${id}`);
                let { orders } = res.data
                setOrders(orders)
            } catch (error) {
                console.error(error)
            }
            setLoading(false)
            setReload(false)
        }

        fetchingData()
    }, [id, reload])

    const deleteOrder = async (orderId) => {
        try {
            setLoading(true)
          await myAxios.get(`/order/delete-order/${orderId}`);
        } catch (error) {
            console.error(error)
        }
        setLoading(false)
        setReload(true)
    }

    const tableHeadings = ["Id", "Shop Name", "Order Name", "Adress", "Contact", "Price", "Order Details", "Status", "Delete"]

    return (
        <>
        {loading && <ApiLoader />}
        <div className='orders-container'>
            <div className='orders-inner-container'>

                <div className='orders-header'>
                    <h1>Orders</h1>
                </div>

                <div className='orders-table-container'>
                    <Table
                        tableHeadings={tableHeadings}
                        tableData={orders}
                        deleteEntry={deleteOrder}
                    />
                </div>

            </div>
        </div>
        </>
    )
}
