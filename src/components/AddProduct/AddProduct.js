import React, { useEffect, useState } from 'react'
import "./AddProduct.css"
import Table from '../Table/Table'
import Modal from '../Modal/Modal'
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function AddProduct() {
  const [productEditable, setProductEditable] = useState(null)
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { shopId } = useParams()

  useEffect(() => {
    let fetchingData = async () => {
      let res = await axios.get(`http://localhost:7000/api/v1/product/get-all-products/${shopId}`);
      setProducts(res.data.Products)
    }

    fetchingData()
  }, [])

  const tableHeadings = ["Id", "ProductName", "Image", "Price", "Category", "Update", "Delete"]

  const openModal = () => {
    setProductEditable(null)
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  }

  const deleteEntry = async (productId) => {
    try {
      await axios.delete(`http://localhost:7000/api/v1/product/delete-product/${productId}`)
    } catch (error) {
      console.error(error)
    }
  }

  const updateProduct = (item) => {
    setProductEditable(item)
    setShowModal(true)
  }

  return (
    <div className='add-product-container'>
      <div className='add-product-inner-container'>

        <div className='add-product-header'>
          <h1>Products</h1>
          <button onClick={openModal}>Add New</button>
        </div>

        <div className='add-product-table-container'>
          <Table
            tableHeadings={tableHeadings}
            tableData={products}
            updateDetails={updateProduct}
            deleteEntry={deleteEntry}
          />
        </div>

      </div>
      {showModal && <Modal closeModal={closeModal} productEditable={productEditable} />}
    </div>
  )
}
