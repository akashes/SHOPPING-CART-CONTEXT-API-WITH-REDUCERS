import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CartContextProvider from './context/Context.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </CartContextProvider>
  </StrictMode>,
)
