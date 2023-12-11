import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App';
import Login from './views/Login/Login';
import Cart from './views/Cart/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/home",
    element: <div>Home</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/product/:productID",
    element: <div>Tela de produtos</div>,
  },
  {
    path: "/pay/:payID",
    element: <Cart />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
