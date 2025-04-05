import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'

function App() {

  return (
    <>
   <Header/>
   <Routes>
    <Route path="/" element={<Home />} />

    <Route path='/product/:id' element={<ProductDetails/>} />
    <Route path='/cart' element={<Cart/>} />



   </Routes>
    </>
  )
}

export default App
