import { useState } from "react";
import { useWishlist } from "../../context";

const AddToWishlistButton = ({ product }) => {
  const [isFetching, setIsFetching] = useState(false);
  const { addToWishlist, removeFromWishlist } = useWishlist();

  const {
    state: { wishedItems },
  } = useWishlist();

  const itemExistInWishlist = wishedItems.find(item => item._id === product._id);

  return (
    <button
      className="card-wishlist-btn"
      disabled={isFetching ? true : false}
      onClick={() =>
        !itemExistInWishlist
          ? addToWishlist(product, setIsFetching)
          : removeFromWishlist(product._id)
      }
    >
      <i className={itemExistInWishlist ? "fas fa-heart text-danger" : "fal fa-heart"}></i>
    </button>
  );
};

export { AddToWishlistButton };
