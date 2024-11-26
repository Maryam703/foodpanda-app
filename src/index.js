import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";
import Restaurants from "./components/Restaurants/Restaurants"
import RestaurantItems from "./components/Restaurant-Items/Restaurant-Items"
import ItemDetail from "./components/ItemDetail/ItemDetail"
import Cart from './components/Cart/Cart';
import OrderTrack from "./components/OrderTrack/OrderTrack";
import About from './components/About/About';
import AddProduct from './components/AddProduct/AddProduct';
import OrdersForShop from './components/OrdersForShop/OrdersForShop';
import SignUpForShop from "./components/Authentication/SignUpForShop";
import SignUpRider from './components/Authentication/SignUpRider';
import ProtectedRouteForUser from './components/ProtectedRoutes/ProtectedRouteForUser';
import ProtectedRouteForShopKeeper from './components/ProtectedRoutes/ProtectedRouteForShopKeeper';
import ProtectedRouteForRider from './components/ProtectedRoutes/ProtectedRouteForRider';
import Orders from './components/Orders/Orders';
import UserInfo from './components/UserInfo/UserInfo';
import ShopkeerDashBoard from "./components/ShopkeeperDashboard/ShopkeeperDashboard";
import RiderDashboard from './components/RiderDashboard/RiderDashboard';
import OrdersForRider from './components/OrdersForRider/OrdersForRider';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signup-shop" element={<SignUpForShop />} />
      <Route path="/signup-rider" element={<SignUpRider />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />

      {/* user routes */}
      <Route path="/" element={<App />} >
        <Route path="" element={<Restaurants />} />
        <Route path="/restaurant/:id" element={<RestaurantItems />} />
        <Route path="/food-item/:id" element={<ItemDetail />} />
        <Route path="/user-info" element={<UserInfo />} />
        <Route path="/cart" element={<ProtectedRouteForUser><Cart /></ProtectedRouteForUser>} />
        <Route path="/track-order" element={<ProtectedRouteForUser><OrderTrack /></ProtectedRouteForUser>} />
      </Route>

       {/* shopkeeper routes */}
      <Route path="/shopadmin-dashboard" element={<ProtectedRouteForShopKeeper><ShopkeerDashBoard /></ProtectedRouteForShopKeeper>} >
      <Route path="add-products/:id" element={<ProtectedRouteForShopKeeper><AddProduct /></ProtectedRouteForShopKeeper>} />
      <Route path="orders/:id" element={<ProtectedRouteForShopKeeper><OrdersForShop /></ProtectedRouteForShopKeeper>} />
      <Route path="about" element={<About />} />
      <Route path="user-info" element={<UserInfo />} />
      </Route>

      {/* rider routes */}
      <Route path="/rider-dashboard" element={<ProtectedRouteForRider><RiderDashboard /></ProtectedRouteForRider>} >
      <Route path='all-orders' element={<ProtectedRouteForRider><Orders /></ProtectedRouteForRider>} />
      <Route path='rider-orders' element={<ProtectedRouteForRider><OrdersForRider /></ProtectedRouteForRider>} />
     <Route path="about" element={<About />} />
      <Route path="user-info" element={<UserInfo />} />
      </Route>
     

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
