import './Cart.css';
import item1 from '../../assets/catalog/embellished-gown.jpg';

const Cart = () => {
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

      <div className="Cart__contents">
        <div className="Cart__contents__item">
          <img
            alt="Embellished Gown"
            src={item1}
            className="Cart__contents__item__img"
          ></img>
          <div className="Cart__contents__item__details">
            <div className="Cart__contents__item__details__name">
              Cashmere Turtleneck Sweater
            </div>
            <div className="Cart__contents__item__details__price">1999.99</div>
            <div className="Cart__contents__item__details__count">
              <button className="Cart__contents__item__details__count__minus">
                <span>-</span>
              </button>
              <div className="Cart__contents__item__details__count__total">
                1
              </div>
              <button className="Cart__contents__item__details__count__plus">
                <span>+</span>
              </button>
            </div>
          </div>
        </div>
      </div>

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
