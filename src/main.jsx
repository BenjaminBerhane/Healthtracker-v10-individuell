import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import routes from './routes.js'
import './index.css'
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider routes={routes} />  
  </StrictMode>,
)
