import React from 'react'
import { Route, Routes } from 'react-router'
import App from './App'
import Header from './features/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Shop from './features/Shop'
import Register from './Pages/Register'
import Login from './Pages/Login'
import PageNotFound from './features/PageNotFound'
import Cart from './features/Cart'
import ProductDetails from './features/ProductDetails'

const Routing = () => {
  return (
   <Routes>
        <Route path='/' element={<App/>}>
            <Route element={<Header/>}>
                <Route index element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='shop' element={<Shop/>}/>
                <Route path='register' element={<Register/>}/>
                <Route path='cart' element={<Cart/>}/>
                <Route path='product/details' element={<ProductDetails/>}/>
                <Route path='Login' element={<Login/>}/>
                <Route path='Register' element={<Register/>}/>
            </Route>
            <Route path='login' element={<Login/>}/>
        </Route>
        <Route path='*' element={<PageNotFound/>}/>

   </Routes>
  )
}

export default Routing
