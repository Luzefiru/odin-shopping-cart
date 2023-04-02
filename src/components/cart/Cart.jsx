import CartItem from './CartItem';
import './Cart.css';
import { useState, useEffect } from 'react';
import item1 from '../../assets/catalog/embellished-gown.jpg';

const Cart = () => {
  const [items, setItems] = useState([]);

  const cartAddItem = ({ name, price, image }) => {
    setItems([...items, { name, price, src: image }]);
  };

  const cartRemoveItem = ({ name, price, image }) => {
    items.splice(items.indexOf({ name, price, src: image }), 1);
    // force trigger a re-render
    setItems([...items]);
  };

  useEffect(() => {
    setItems([{ name: 'Emellished Potato', price: '6999.99', src: item1 }]);
  }, []);

  const cartCountItem = ({ name, price, image }) => {
    const count = items.filter((e) => {
      return e.name === name && e.price === price && e.src === image;
    }).length;
    return count;
  };

  const generateCartContents = () => {
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
    <div className="Cart">
      <svg
        className="Cart__close-btn"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        onClick={toggleCartSidebar}
      >
        <path
          fill="currentColor"
          d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
        />
      </svg>

      <div className="Cart__header">
        Your Bag
        <br />
        <span className="Cart__header__subtext">You have x items.</span>
      </div>

      <div className="Cart__contents">{generateCartContents()}</div>

      <div className="Cart__checkout">
        <div className="Cart__checkout__summary">
          <div className="Cart__checkout__summary__subtotal-title">
            Subtotal
          </div>
          <div className="Cart__checkout__summary__subtotal-price">1999.99</div>
        </div>

        <button type="button" className="Cart__checkout__button">
          Checkout
        </button>
      </div>
    </div>
  );
};

export const toggleCartSidebar = () => {
  document.querySelector('.Cart').classList.toggle('show');
};

export default Cart;
