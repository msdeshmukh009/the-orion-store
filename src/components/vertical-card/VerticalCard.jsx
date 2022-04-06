import "./verticalCard.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AddToCartButton } from "./AddToCartButton";
import { AddToWishlistButton } from "./AddToWishlistButton";

const VerticalCard = ({ product }) => {
  const {
    id,
    image,
    title,
    description,
    originalPrice,
    discountedPrice,
    rating,
    numberOfReviews,
    inStock,
  } = product;

  const [isFetching, setIsFetching] = useState({ cart: false, wishlist: false });

  return (
    <div className="card vertical-card">
      {!inStock && (
        <Link className="overlay-container" to={`/products/details/${id}`}>
          <h2 className="overlay-text">Out of Stock</h2>
        </Link>
      )}

      <AddToWishlistButton
        product={product}
        setIsFetching={setIsFetching}
        isFetching={isFetching}
      />

      <Link to={`/products/details/${id}`} className="card-image-container">
        <img
          className="responsive-img rounded-top-corner-img"
          src={image}
          alt={description}
          width="340"
          height="270"
          loading="lazy"
        />
        <div className="rating-info">
          <span>
            {rating}
            <i className="fas fa-star rating-star-icon colored-star"></i>
          </span>
          <span>|</span>
          <span>{numberOfReviews}</span>
        </div>
      </Link>

      <Link to={`/products/details/${id}`} className="card-info-container">
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
      </Link>
      <div className="card-cta-vertical">
        <AddToCartButton product={product} setIsFetching={setIsFetching} isFetching={isFetching} />
      </div>
    </div>
  );
};

export { VerticalCard };
