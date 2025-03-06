import React from 'react'
import Header from '../header/Header'
import Home from '../home/Home'
import { Route, Routes } from 'react-router-dom'
import About from '../about/About'
import Hardware from '../hardware/Hardware'
import Shop from '../shop/Shop'
import Contact from '../contact/Contact'
import Blog from '../blog/Blog'
   
const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/Header' element={<Header/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Hardware' element={<Hardware/>} />
            <Route path='/Shop' element={<Shop/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='/Blog' element={<Blog/>} />
        </Routes>
    </div>
  )
}

export default Router