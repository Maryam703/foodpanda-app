import React, { useState } from 'react'
import "./AddProduct.css"
import Table from '../Table/Table'
import Modal from '../Modal/Modal'

export default function AddProduct() {
  const [products, setProducts] = useState([
    {
      id: 123456,
      productName: "Biryani",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvC1pGhW7_BRwnGuBguLE99tfA0faYflekCA&s",
      totalPrice: 25,
    },
    {
      id: 12345,
      productName: "Biryani",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvC1pGhW7_BRwnGuBguLE99tfA0faYflekCA&s",
      totalPrice: 25
    },
    {
      id: 12345,
      productName: "Biryani",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvC1pGhW7_BRwnGuBguLE99tfA0faYflekCA&s",
      totalPrice: 25
    },
    {
      id: 12345,
      productName: "Biryani",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvC1pGhW7_BRwnGuBguLE99tfA0faYflekCA&s",
      totalPrice: 25
    }
  ]);
  const [showModal, setShowModal] = useState(false)

  const tableHeadings = ["Id", "ProductName", "Image", "Price", "Update", "Delete"]

  const openModal = () => {
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  }

  const deleteEntry = (Id) => {
    let filteredProducts = products.filter((product) => product.id !== Id);
    setProducts(filteredProducts)
  }

  const updateProduct = (Id) => {
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
      {showModal && <Modal closeModal={closeModal} />}
    </div>
  )
}
