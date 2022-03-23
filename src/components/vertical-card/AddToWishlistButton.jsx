import { useState } from "react";
import { useAuth, useWishlist } from "../../context";
import { useNavigate } from "react-router-dom";

const AddToWishlistButton = ({ product, setIsFetching, isFetching }) => {
  // const [isFetching, setIsFetching] = useState(false);
  const { addToWishlist, removeFromWishlist } = useWishlist();
  const navigation = useNavigate();

  const {
    state: { wishedItems },
  } = useWishlist();

  const {
    state: { token },
  } = useAuth();

  const itemExistInWishlist = wishedItems.find(item => item._id === product._id);

  return (
    <button
      className="card-wishlist-btn"
      disabled={isFetching.wishlist}
      onClick={() =>
        token
          ? !itemExistInWishlist
            ? addToWishlist(product, setIsFetching)
            : removeFromWishlist(product._id)
          : navigation("/signin")
      }
    >
      <i className={itemExistInWishlist ? "fas fa-heart text-danger" : "fal fa-heart"}></i>
    </button>
  );
};

export { AddToWishlistButton };
