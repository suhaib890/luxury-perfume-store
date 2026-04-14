import React, { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Collection from './pages/Collection'
import Archive from './pages/Archive'
import AddFragrance from './pages/AddFragrance'
import Auth from './pages/Auth'
import Profile from './pages/Profile'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Stores from './pages/Stores'
import Developers from './pages/Developers'

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/add-fragrance" element={<AddFragrance />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="/developers" element={<Developers />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App




