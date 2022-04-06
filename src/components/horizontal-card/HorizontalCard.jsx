import { useCart, useAuth } from "../../context";
import { useState } from "react";
import { AddToCartButton } from "../vertical-card/AddToCartButton";
import { MoveToWishlist } from "./MoveToWishlistButton";
import "./horizontalCard.css";
import { Link } from "react-router-dom";

const HorizontalCard = ({ product }) => {
  const {
    id,
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
      <Link to={`/products/details/${id}`} className="card-image-container">
        <img className="responsive-img rounded-top-corner-img" src={image} alt={description} />
      </Link>

      <div className="horizontal-card-content">
        <Link to={`/products/details/${id}`} className="card-info-container text-left">
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
        </Link>

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
