/* import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' */
import React from "react";
import ReactDOM from "react-dom/client";
import router from './routes.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider routes={routes} />  
  </StrictMode>,
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);