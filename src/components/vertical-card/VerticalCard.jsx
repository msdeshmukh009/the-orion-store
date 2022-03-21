import { useNavigate, Link } from "react-router-dom";
import { useAuth, useCart } from "../../context";
import { useState } from "react";
import "./verticalCard.css";
const VerticalCard = ({ product }) => {
  const {
    _id,
    image,
    title,
    description,
    originalPrice,
    discountedPrice,
    rating,
    numberOfReviews,
    inStock,
  } = product;

  const {
    addToCart,
    state: { cartItems },
  } = useCart();

  const {
    state: { token },
  } = useAuth();
  const navigation = useNavigate();

  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="card vertical-card">
      {error && <p>{error}</p>}

      {!inStock && (
        <div class="overlay-container">
          <h2 class="overlay-text">Out of Stock</h2>
        </div>
      )}

      <button className="card-wishlist-btn">
        <i className="fas fa-heart-circle"></i>
      </button>
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
        {cartItems.find(item => item._id === _id) ? (
          <Link to="/cart" className="btn btn-primary block-btn text-center">
            <span className="btn-icon">
              <i className="fas fa-shopping-cart"></i>
            </span>
            Go to cart
          </Link>
        ) : (
          <button
            className="btn btn-primary block-btn"
            disabled={loader}
            onClick={() =>
              token ? addToCart(product, setLoader, setError) : navigation("/signin")
            }
          >
            <span className="btn-icon">
              <i className="fas fa-shopping-cart"></i>
            </span>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export { VerticalCard };
