import React, { useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import {Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/Placeorder/Placeorder'
import Footer from './component/Footer/Footer'
import LoginPopup from './component/LoginPopup/LoginPopup'
const App = () => {
  const[showLogin,setShowLogin] =useState(false)
  return (
    <div style={{fontSize: '48px', color: 'red'}}>
    {
    showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>
    }
    <div className="app">
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<Placeorder/>}/>


      </Routes>
    </div>
    <Footer/>
    Hello
    </div>
  )
}

export default App
