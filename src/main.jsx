import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App';

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
    element: <div>Login</div>,
  },
  {
    path: "/product/:productID",
    element: <div>Tela de produtos</div>,
  },
  {
    path: "/pay/:payID",
    element: <div>Tela de pagamento</div>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
