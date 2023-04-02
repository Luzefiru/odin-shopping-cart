import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './core/Navbar';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Cart from './cart/Cart';
import CartItem from './cart/CartItem';

function App() {
  const [items, setItems] = useState([]);

  const cartAddItem = ({ name, price, image }) => {
    setItems([...items, { name, price, src: image }]);
  };

  const cartRemoveItem = ({ name, price, image }) => {
    items.splice(
      items.findIndex(
        (e) => e.name === name && e.price === price && e.src === image
      ),
      1
    );
    // force trigger a re-render
    setItems([...items]);
  };

  const cartCountItem = ({ name, price, image }) => {
    const count = items.filter((e) => {
      return e.name === name && e.price === price && e.src === image;
    }).length;
    return count;
  };

  const generateCartContents = () => {
    console.log(items);
    const uniqueItems = [];
    for (let i of items) {
      let flag = false;
      for (let j of uniqueItems) {
        // don't add the item in uniqueItems if it already matches an object in uniqueItems
        if (i.name === j.name && i.price === j.price && i.src === j.src) {
          flag = true;
        }
      }
      // if the item is unique
      if (flag === false) {
        uniqueItems.push(i);
      }
    }

    const cartItemCards = uniqueItems.map((item) => {
      return (
        <CartItem
          src={item.src}
          name={item.name}
          price={item.price}
          count={cartCountItem({
            name: item.name,
            price: item.price,
            image: item.src,
          })}
          handlePlus={() => {
            cartAddItem({
              name: item.name,
              price: item.price,
              image: item.src,
            });
          }}
          handleMinus={() => {
            cartRemoveItem({
              name: item.name,
              price: item.price,
              image: item.src,
            });
          }}
        />
      );
    });
    return cartItemCards;
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/catalog"
          element={<Catalog cartAddItem={cartAddItem} />}
        />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
      <Cart cartContents={generateCartContents()} />
    </>
  );
}

export default App;
