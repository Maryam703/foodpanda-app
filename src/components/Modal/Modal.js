import React, { useEffect, useState } from 'react'
import "./Modal.css"
import { Form } from 'react-router-dom';
import axios from 'axios';

export default function Modal({ closeModal, productEditable }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(null);
  const [image, setImage] = useState("");
  const formData = new FormData()

  useEffect(() => {
    if (productEditable) {
      setName(productEditable.name);
      setCategory(productEditable.category);
      setDescription(productEditable.description);
      setPrice(productEditable.price);
      setImage(productEditable.image);
    }
  },[productEditable])

  let editableData = {
    name,
    description,
    price
  }

  formData.append("name", name)
  formData.append("image", image)
  formData.append("price", price)
  formData.append("category", category)
  formData.append("description", description)

  const SubmitFormHandler = async (e) => {
    e.preventDefault();

    try {
      if (productEditable) {
        await axios.patch(`http://localhost:7000/api/v1/product/update-product/${productEditable.id}`, editableData)

      } else {
        await axios.post("http://localhost:7000/api/v1/product/create-new-product", formData, { headers: { "Content-Type": "multipart/form-data" } })

      }
    } catch (error) {
      console.error(error)
    }
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
          <select
            type="text"
            name="category"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
            <option>Drink</option>
            <option>Others</option>
          </select>
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
            onChange={(e) => setImage(e.target.files[0])}
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
