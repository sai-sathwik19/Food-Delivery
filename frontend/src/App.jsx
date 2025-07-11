import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import Popuplogin from './components/PopupLogin/Popuplogin'

const App = () => {

  const[showLogin,setShowLogin]= useState(false)

  return (
    <>
    {showLogin?<Popuplogin setShowLogin={setShowLogin}></Popuplogin>:<></>}

    <div className='app'>
      <Navbar setShowLogin={setShowLogin}></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/order' element={<PlaceOrder></PlaceOrder>}></Route>
      </Routes>
    </div>
    <Footer></Footer>
    </>
  )
}

export default App
