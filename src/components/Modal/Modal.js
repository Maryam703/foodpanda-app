import React, { useState } from 'react'
import "./Modal.css"
import { Form } from 'react-router-dom';

export default function Modal({closeModal}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(null);
  const [file, setFile] = useState("");
  const [productEditable, setProductEditable] = useState(true)

  const SubmitFormHandler = (e) => {
    e.preventDefault();
    closeModal();
  }
  
  return (
    <Form className="modal-container" onSubmit={SubmitFormHandler}>
      <div className="modal-box">

        <button onClick={closeModal} className="modal-cross-box">
          <i class="cross-btn fa-solid fa-xmark"></i>
        </button>

        <div className="modal-heading">
          {productEditable ? "Edit Item" : "Add Item"}
        </div>

        <div className="modal-input-box">
            <label>Product Name:</label>
          <input
            type="text"
            name="name"
            required
            value={name}
            placeholder="Enter Product Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="modal-input-box">
            <label>Product Price:</label>
          <input
            type="number"
            name="price"
            required
            placeholder="0.00"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="modal-input-box">
            <label>Product Category:</label>
          <input
            type="text"
            name="category"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="modal-input-box">
            <label>Description:</label>
          <input
            type="text"
            name="description"
            required
            placeholder="Add a description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="modal-input-box">
            <label>Product Image:</label>
          <input
            type="file"
            name="image"
            required
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <div className="modal-submit-btn">
        <button type="submit">
          {productEditable ? "Update" : "Add Product"}
        </button>
      </div>
      </div>
    </Form>
  )
}
