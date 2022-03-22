import { AddToCartButton } from "./AddToCartButton";
import { AddToWishlistButton } from "./AddToWishlistButton";
import "./verticalCard.css";

const VerticalCard = ({ product }) => {
  const {
    image,
    title,
    description,
    originalPrice,
    discountedPrice,
    rating,
    numberOfReviews,
    inStock,
  } = product;

  return (
    <div className="card vertical-card">
      {!inStock && (
        <div class="overlay-container">
          <h2 class="overlay-text">Out of Stock</h2>
        </div>
      )}

      <AddToWishlistButton product={product} />

      <div className="card-image-container">
        <img
          className="responsive-img rounded-top-corner-img"
          src={image}
          alt={description}
          width="340"
          height="270"
        />
        <div className="rating-info">
          <span>
            {rating}
            <i className="fas fa-star rating-star-icon colored-star"></i>
          </span>
          <span>|</span>
          <span>{numberOfReviews}</span>
        </div>
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
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export { VerticalCard };
