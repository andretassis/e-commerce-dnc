import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from './views/Login/Login';
import Cart from './views/Cart/Cart';
import Home from './views/Home/Home';
import { PRODUCTS_MOCK } from './mock/products.mock';
import Checkout from './views/Checkout/Checkout';
import './index.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login data={PRODUCTS_MOCK} />,
  },
  {
    path: "/home",
    element: <Home data={PRODUCTS_MOCK} />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/products/:productId",
    element: <Cart data={PRODUCTS_MOCK} />,
  },
  {
    path: "/pay/:payID",
    element: <Checkout data={PRODUCTS_MOCK} />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
