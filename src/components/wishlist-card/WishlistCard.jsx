import { useState } from "react";
import { useWishlist } from "../../context";
import { AddToCartButton } from "../vertical-card/AddToCartButton";

const WishlistCard = ({ product }) => {
  const { _id, image, title, description, originalPrice, discountedPrice } = product;

  const { removeFromWishlist } = useWishlist();

  const [isFetching, setIsFetching] = useState({ cart: false });

  return (
    <div className="card vertical-card">
      <button className="card-close-btn" onClick={() => removeFromWishlist(_id)}>
        <i className="fas fa-times"></i>
      </button>

      <div className="card-image-container">
        <img className="responsive-img rounded-top-corner-img" src={image} alt="card-img" />
      </div>

      <div className="card-info-container">
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
      <div className="card-cta-vertical">
        <AddToCartButton product={product} setIsFetching={setIsFetching} isFetching={isFetching} />
      </div>
    </div>
  );
};

export { WishlistCard };
