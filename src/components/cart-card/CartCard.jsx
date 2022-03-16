import "./cartCard.css";

const CartCard = ({ product }) => {
  const { title, description, price, discountedPrice, quantity, image } = product;
  return (
    <div className="card horizontal-card">
      <div className="card-image-container">
        <img className="responsive-img rounded-top-corner-img" src={image} alt={description} />
      </div>

      <div className="horizontal-card-content">
        <div className="card-info-container text-left">
          <span className="text-bold card-heading">{title}</span>
          <span className="card-sub-heading text-gray">{description}</span>
          <div className="price">
            <span className="card-sub-heading text-md">₹ {price} </span>
            <span className="text-line-through text-xs text-gray">₹ {discountedPrice}</span>
          </div>
        </div>
        <div className="order-counter flex-total-center">
          <span>Quantity:</span>
          <button className="counter-btn flex-total-center">-</button>
          <input className="quantity-input" type="number" value={quantity} readOnly={true} />
          <button className="counter-btn flex-total-center">+</button>
        </div>
        <div className="card-call-to-action-horizontal">
          <button className="btn btn-secondary block-btn">Remove from cart</button>
          <button className="btn btn-outline block-btn">Move to wishlist</button>
        </div>
      </div>
    </div>
  );
};

export { CartCard };
