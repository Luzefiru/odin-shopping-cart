import './App.css';
// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './core/Navbar';
import Home from '../pages/Home';
import Cart from './cart/Cart';

function App() {
  // const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<div>Catalog</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
      <Cart />
    </>
  );
}

export default App;
