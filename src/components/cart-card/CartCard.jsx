import { useCart, useWishlist } from "../../context";
import { useState, useEffect } from "react";
import "./cartCard.css";
import { CounterButtons } from "./CounterButtons";
const CartCard = ({ product }) => {
  const { _id, title, description, discountedPrice, originalPrice, image } = product;

  const { removeFromCart, moveItemFromCartToWishlist } = useCart();

  const [isFetching, setIsFetching] = useState(false);

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
            <span className="card-sub-heading text-md">
              ₹ {new Intl.NumberFormat("en-IN").format(discountedPrice)}
            </span>
            <span className="text-line-through text-xs text-gray">
              ₹ {new Intl.NumberFormat("en-IN").format(originalPrice)}
            </span>
          </div>
        </div>

        <CounterButtons product={product} />

        <div className="card-call-to-action-horizontal">
          <button
            className="btn btn-outline-primary block-btn"
            onClick={() => moveItemFromCartToWishlist(product, setIsFetching)}
            disabled={isFetching ? true : false}
          >
            Move to wishlist
          </button>
          <button className="btn btn-outline block-btn" onClick={() => removeFromCart(_id)}>
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
};

export { CartCard };
