import React, { useEffect, useState } from 'react'
import "./AddProduct.css"
import Table from '../Table/Table'
import Modal from '../Modal/Modal'
import { useParams } from 'react-router-dom';
import myAxios from '../../MyAxios';
import ApiLoader from '../../ApiLoader/ApiLoader';

export default function AddProduct() {
  const [productEditable, setProductEditable] = useState(null)
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false)
  const { id } = useParams();

  useEffect(() => {
    let fetchingData = async () => {
      setLoading(true)
      try {
        let res = await myAxios.get(`/product/get-all-products/${id}`);
        let { products } = res.data;
        setProducts(products)
      } catch (error) {
        console.error(error)
      }
      setLoading(false)
      setReload(false)
    }

    fetchingData()
  }, [id, reload])

  const tableHeadings = ["Id", "ProductName", "Image", "Category", "Price", "Update", "Delete"]

  const openModal = () => {
    setProductEditable(null)
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
    setReload(true)
  }

  const deleteEntry = async (productId) => {
    try {
      setLoading(true)
      await myAxios.delete(`/product/delete-product/${productId}`)
    } catch (error) {
      console.error(error)
    }
    setReload(true)
    setLoading(false)
  }

  const updateProduct = (item) => {
    setProductEditable(item)
    setShowModal(true)
  }

  return (
    <>
    {loading && <ApiLoader /> }
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
    </>
  )
}
