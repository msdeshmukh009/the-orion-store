import { useCart, useAuth } from "../../context";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

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

  const {
    state: { token },
  } = useAuth();

  const {
    addToCart,
    state: { cartItems },
  } = useCart();

  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const navigation = useNavigate();

  return (
    <div className="card horizontal-card">
      {error && <div>{error}</div>}
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
          <button className="btn btn-outline-primary block-btn">Move to wishlist</button>
        </div>
      </div>
    </div>
  );
};

export { HorizontalCard };
