import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header/>
   <Routes>
    <Route path="/" element={<Home />} />

    <Route path='/' element={<Cart/>} />
    <Route path='/product/:id' element={<ProductDetails/>} />
    <Route path='/cart' element={<Cart/>} />
     {/* <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} /> */}


   </Routes>
    </>
  )
}

export default App
