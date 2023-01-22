import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../pages/cart/Cart'
import Home from '../pages/home/Home'
import Navbar from '../pages/navbar/Navbar'

const Router = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </>

    )
}

export default Router


