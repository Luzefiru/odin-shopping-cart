import './Cart.css';
const Cart = (props) => {
  let key = 0;
  return (
    <div key={key++} className="Cart">
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
        <span className="Cart__header__subtext">
          You have {props.numItems} items.
        </span>
      </div>

      <div className="Cart__contents">{props.cartContents}</div>

      <div className="Cart__checkout">
        <div className="Cart__checkout__summary">
          <div className="Cart__checkout__summary__subtotal-title">
            Subtotal
          </div>
          <div className="Cart__checkout__summary__subtotal-price">
            {props.subtotal}
          </div>
        </div>

        <button
          onClick={() => {
            alert('Checkout has not been implemented yet.');
          }}
          type="button"
          className="Cart__checkout__button"
        >
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
