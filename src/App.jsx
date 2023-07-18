import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ContactUs from './Pages/ContactUs/ContactUs';
import Details from './Pages/Details/Details';
import Homepage from './Pages/Homepage/Homepage';
import CartContextProvider from './Context/CartContext';
import Checkout from './Pages/Checkout/Checkout';

function App() {
  

  return (
    <BrowserRouter>
    <CartContextProvider>
      <Header />

      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/contactus' element={<ContactUs />}/>
        <Route path='/details/:productId' element={<Details />}/>
        <Route path='/checkout' element={<Checkout />}/>
      </Routes>

      <Footer />
    </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
