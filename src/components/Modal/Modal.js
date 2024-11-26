import React, { useEffect, useState } from 'react'
import "./Modal.css"
import { Form } from 'react-router-dom';
import myAxios from '../../MyAxios';
import ApiLoader from '../../ApiLoader/ApiLoader';

export default function Modal({ closeModal, productEditable }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Breakfast");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(null);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false)
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

  formData.append("name", name)
  formData.append("image", image)
  formData.append("price", price)
  formData.append("category", category)
  formData.append("description", description)

  const SubmitFormHandler = async (e) => {
    e.preventDefault();

    if (productEditable) {
      try {
        setLoading(true)
        await myAxios.patch(`/product/update-product/${productEditable?._id}`, formData, { headers: { "Content-Type": "multipart/form-data" } })
      } catch (error) {
        console.error(error)
      }
   
    } else {
     try {
      setLoading(true)
      await myAxios.post("/product/create-new-product", formData, { headers: { "Content-Type": "multipart/form-data" } })
     } catch (error) {
      console.error(error)
     }
    }

    setLoading(false)
    closeModal();
  }

  return (
    <>
    {loading && <ApiLoader />}
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
            <option defaultValue="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="drink">Drink</option>
            <option value="others">Others</option>
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
    </>
  )
}
