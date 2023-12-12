import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from './views/Login/Login';
import Cart from './views/Cart/Cart';
import Home from './views/Home/Home';
import { PRODUCTS_MOCK } from './mock/products.mock';
import Product from './views/Product/Product';
import './index.scss'

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Home data={PRODUCTS_MOCK} text="aaaa" />,
  // },
  {
    path: "/home",
    element: <Home data={PRODUCTS_MOCK} />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/products/:productID",
    element: <Product data={PRODUCTS_MOCK} />,
  },
  {
    path: "/pay/:payID",
    element: <Cart data={PRODUCTS_MOCK} />,
  },

  //APAGAR ISSO AQUI DEPOIS E ACERTAR AS ROTAS
  {
    path: "/",
    element: <Cart />,
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
