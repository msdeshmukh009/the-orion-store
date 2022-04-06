import { useAuth, useWishlist } from "../../context";
import { useLocation, useNavigate } from "react-router-dom";

const AddToWishlistButton = ({ product, setIsFetching, isFetching }) => {
  const { addToWishlist, removeFromWishlist } = useWishlist();
  const navigation = useNavigate();
  const { pathname } = useLocation();

  const {
    state: { wishedItems },
  } = useWishlist();

  const {
    state: { token },
  } = useAuth();

  const itemExistInWishlist = wishedItems.find(item => item._id === product._id);

  return (
    <button
      className={`card-wishlist-btn ${
        pathname.includes("/products/") ? "position-unset btn btn-outline-primary" : ""
      }`}
      disabled={isFetching.wishlist}
      onClick={() =>
        token
          ? !itemExistInWishlist
            ? addToWishlist(product, setIsFetching)
            : removeFromWishlist(product._id)
          : navigation("/signin")
      }
    >
      {pathname === "/wishlist" ? (
        <i className="fas fa-times"></i>
      ) : (
        <span className="flex-total-center">
          <i className={itemExistInWishlist ? "fas fa-heart text-danger" : "fal fa-heart"}></i>
          {pathname.includes("/products/details/")
            ? itemExistInWishlist
              ? "Added in wishlist"
              : "Add to wishlist"
            : ""}
        </span>
      )}
    </button>
  );
};

export { AddToWishlistButton };
