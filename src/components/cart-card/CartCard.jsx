import { useCart } from "../../context";
import "./cartCard.css";

const CartCard = ({ product }) => {
  const { _id, title, description, price, discountedPrice, originalPrice, qty, image } = product;
  const { changeQuantity, removeFromCart } = useCart();
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
            <span className="card-sub-heading text-md">₹ {discountedPrice} </span>
            <span className="text-line-through text-xs text-gray">₹ {originalPrice}</span>
          </div>
        </div>
        <div className="order-counter flex-total-center">
          <span>Quantity:</span>
          <button
            className="btn btn-outline"
            disabled={qty === 1 ? true : false}
            onClick={() => changeQuantity("decrement", _id)}
          >
            -
          </button>
          <span className="quantity">{qty}</span>
          <button className="btn btn-outline" onClick={() => changeQuantity("increment", _id)}>
            +
          </button>
        </div>
        <div className="card-call-to-action-horizontal">
          <button className="btn btn-outline-primary block-btn">Move to wishlist</button>
          <button className="btn btn-outline block-btn" onClick={() => removeFromCart(_id)}>
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
};

export { CartCard };
