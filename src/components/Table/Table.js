import React from 'react';
import "./Table.css"

export default function Table({ tableHeadings, tableData, updateDetails, deleteEntry}) {
 
    return (
        <>
            <table>
                <thead>
                {tableHeadings && tableHeadings.map((heading) => { return (<th>{heading}</th>)})}
                </thead>
                <tbody>
                    {tableData.length > 0 && tableData.map((item) => {
                        return(
                            <tr>
                            <td>{item._id}</td>
                            <td>{item.name}</td>
                            <td>{item.image && <div className='table-img-container'><img src={item.image} alt={item.image} /></div>}</td>
                            <td>{item.price}</td>
                            {item.category && <td>{item.category}</td>}
                            {updateDetails && <td><button className="table-edit-btn" onClick={()=> updateDetails(item)}>Update</button></td>}
                            {item.quantity && <td>{item.quantity}</td>}
                            {item.shopName && <td>{item.shopName}</td>}
                            {item.orderName && <td>{item.orderName}</td>}
                            {item.adress && <td>{item.adress}</td>}
                            {item.instruction && <td>{item.instruction}</td>}
                            {item.Status && <td><select className='table-status-selector'>
                                <option>{item.Status}</option>
                                <option>processing</option>
                                <option>shipped</option>
                                <option>delivered</option>
                                <option>completed</option>
                            </select></td>}
                            <td><button className='table-delete-btn' onClick={()=> deleteEntry(item.id)}>Delete</button></td>
                            
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
