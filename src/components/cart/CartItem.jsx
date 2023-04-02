const CartItem = (props) => {
  return (
    <div className="Cart__contents__item">
      <img
        alt="Embellished Gown"
        src={props.src}
        className="Cart__contents__item__img"
      ></img>
      <div className="Cart__contents__item__details">
        <div className="Cart__contents__item__details__name">{props.name}</div>
        <div className="Cart__contents__item__details__price">
          {props.price}
        </div>
        <div className="Cart__contents__item__details__count">
          <button
            onClick={props.handleMinus}
            type="button"
            className="Cart__contents__item__details__count__minus"
          >
            <span>-</span>
          </button>
          <div className="Cart__contents__item__details__count__total">
            {props.count}
          </div>
          <button
            onClick={props.handlePlus}
            type="button"
            className="Cart__contents__item__details__count__plus"
          >
            <span>+</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
