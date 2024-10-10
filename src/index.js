import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";
import Restaurants from "./components/Restaurants/Restaurants"
import RestaurantItems from "./components/Restaurant-Items/Restaurant-Items"
import ItemDetail from "./components/ItemDetail/ItemDetail"
import Cart from './components/Cart/Cart';
import OrderTrack from "./components/OrderTrack/OrderTrack";
import About from './components/About/About';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
    <Route path="/about" element={<About />} />
    <Route path="/" element={<App />} >
    <Route path="" element={<Restaurants />} />
    <Route path="/restaurant/:id" element={<RestaurantItems />} />
    <Route path="/restaurant/:id/food-item/:id" element={<ItemDetail />} />

    </Route>
    <Route path="/cart" element={<Cart />} />
    <Route path="/track-order" element={<OrderTrack />} />
    </>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
