import { useCart, useAuth } from "../../context";
import { useState } from "react";
import { AddToCartButton } from "../vertical-card/AddToCartButton";
import { MoveToWishlist } from "./MoveToWishlistButton";
import "./horizontalCard.css";

const HorizontalCard = ({ product }) => {
  const {
    _id,
    title,
    description,
    featuredProductDescription,
    originalPrice,
    discountedPrice,
    image,
  } = product;

  const [isFetching, setIsFetching] = useState({ cart: false, wishlist: false });

  return (
    <div className="card horizontal-card">
      <span className="card-badge">New</span>
      <div className="card-image-container">
        <img className="responsive-img rounded-top-corner-img" src={image} alt={description} />
      </div>

      <div className="horizontal-card-content">
        <div className="card-info-container text-left">
          <span className="text-bold card-heading">{title}</span>
          <span className="card-sub-heading text-gray">{description}</span>
          <div className="price">
            <span className="card-sub-heading text-md">
              ₹{new Intl.NumberFormat("en-IN").format(discountedPrice)}
            </span>
            <span className="text-line-through text-xs text-gray">
              {new Intl.NumberFormat("en-IN").format(originalPrice)}
            </span>
          </div>
          <div className="card-paragraph">{featuredProductDescription}</div>
        </div>

        <div className="card-call-to-action-horizontal">
          <AddToCartButton
            product={product}
            setIsFetching={setIsFetching}
            isFetching={isFetching}
          />
          <MoveToWishlist product={product} setIsFetching={setIsFetching} isFetching={isFetching} />
        </div>
      </div>
    </div>
  );
};

export { HorizontalCard };
