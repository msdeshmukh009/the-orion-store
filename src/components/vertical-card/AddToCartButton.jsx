import { useState } from "react";
import { useAuth, useCart } from "../../context";
import { useNavigate, Link } from "react-router-dom";

const AddToCartButton = ({ product }) => {
  const [isFetching, setIsFetching] = useState(false);
  const { addToCart } = useCart();
  const navigation = useNavigate();

  const {
    state: { token },
  } = useAuth();

  const {
    state: { cartItems },
  } = useCart();

  return cartItems.find(item => item._id === product._id) ? (
    <Link to="/cart" className="btn btn-primary block-btn text-center">
      <span className="btn-icon">
        <i className="fas fa-shopping-cart"></i>
      </span>
      Go to cart
    </Link>
  ) : (
    <button
      className="btn btn-primary block-btn"
      disabled={isFetching ? true : false}
      onClick={() => (token ? addToCart(product, setIsFetching) : navigation("/signin"))}
    >
      {!isFetching && (
        <span className="btn-icon">
          <i className="fas fa-shopping-cart"></i>
        </span>
      )}

      {isFetching ? (
        <img
          className="responsive-img add-to-cart-loader"
          src="/assets/Spin-1s-150px-sec.svg"
          alt="Adding to cart"
        />
      ) : (
        "Add to cart"
      )}
    </button>
  );
};

export { AddToCartButton };
