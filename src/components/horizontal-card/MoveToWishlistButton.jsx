import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useWishlist } from "../../context";

const MoveToWishlist = ({ product, setIsFetching, isFetching }) => {
  const navigation = useNavigate();
  const {
    state: { token },
  } = useAuth();

  const {
    state: { wishedItems },
    addToWishlist,
  } = useWishlist();

  const itemExistInWishlist = wishedItems.find(item => item._id === product._id);

  return itemExistInWishlist ? (
    <Link to="/wishlist" className="btn btn-outline-primary block-btn text-center">
      Go to Wishlist
    </Link>
  ) : (
    <button
      disabled={isFetching.wishlist}
      className="btn btn-outline-primary block-btn"
      onClick={() => (token ? addToWishlist(product, setIsFetching) : navigation("/signin"))}
    >
      Move to wishlist
    </button>
  );
};

export { MoveToWishlist };
