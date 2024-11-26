import React, { useEffect, useState } from 'react';
import "./Table.css"
import OrderDetails from '../OrderDetails/OrderDetails';
export default function Table({ tableHeadings, tableData, updateDetails, deleteEntry, pickOrderHandler, completeOrderHandler}) {
    const [viewDetails, setViewDetails] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("user"));
        setCurrentUser(user)
    }, [])
   
    const viewOrderDetailHandler = (orderId) => {
        setViewDetails(orderId)
    }
    const closeViewOrder = () => {
        setViewDetails(null)
    }

    return (
        <>
            <table>
                <thead>
                    {tableHeadings && tableHeadings.map((heading) => { return (<th>{heading}</th>) })}
                </thead>
                <tbody>
                    {tableData && tableData.length > 0 && tableData.map((item) => {

                        return (
                            <tr>
                                <td>{item._id}</td>
                                {item.shopName && <td>{item.shopName}</td>}
                                {item.orderBy && <td>{item.orderBy}</td>}
                                {item.adress && <td>{item.adress}</td>}
                                {item.contact && <td>{item.contact}</td>}
                                {item.name && <td>{item.name}</td>}
                                {item.image && <td><div className='table-img-container'><img src={item.image} alt={item.name} /></div> </td>}
                                {item.category && <td>{item.category}</td>}
                                {item.price && <td>{item.price}</td>}
                                {updateDetails && <td><button className="table-edit-btn" onClick={() => updateDetails(item)}>Update</button></td>}
                                {item.Items && <td><button className="table-details-btn" onClick={() => viewOrderDetailHandler(item._id)}>View Details</button></td>}
                                {item.status && <td>{item.status}</td>}
                                {pickOrderHandler && <td> <div className='table-status-btn' onClick={() => pickOrderHandler(item._id)}>Pick Order</div></td>}
                                {item.status === "picked" && currentUser?.role === "rider" && (<td> <div className='table-status-btn' onClick={() => completeOrderHandler(item._id)}>Complete</div></td>)}
                                {deleteEntry && <td><button className='table-delete-btn' onClick={() => deleteEntry(item._id)}>Delete</button></td>}
                            </tr>
                        )
                    })}
                </tbody>
                {viewDetails !== null && <OrderDetails orderId={viewDetails} closeViewOrder={closeViewOrder} />}
            </table>
        </>
    )
}
